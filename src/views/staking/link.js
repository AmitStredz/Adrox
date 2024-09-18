import React, { useEffect, useState } from "react";
import leftLink from "./assets/leftLink.png";
import rightLink from "./assets/rightLink.png";
import doubleLink1 from "./assets/doubleLink1.png";
import doubleLink2 from "./assets/doubleLink2.png";
import adam2 from "./assets/adam2.png";
import userImg from "./assets/userImg.png";
import adam3 from "./assets/adam3.png";
import ellipse from "./assets/ellipse.png";
import CopiedModal from "../signupPage/pages/copiedModal";

import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Link() {
  // const [newTree, setNewTree] = useState([]);
  const [referralTree, setReferralTree] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [clipBoard, setClipBoard] = useState("Copy to Clipboard");

  const [userID, setUserID] = useState("");
  const [maxLevel, setMaxLevel] = useState(3);
  const [totReferralComm, setTotReferralComm] = useState("");
  const [directCommLeft, setDirectCommLeft] = useState("");
  const [directCommRight, setDirectCommRight] = useState("");
  const [history, setHistory] = useState([]);

  const [leftReferralLink, setLeftReferralLink] = useState("");
  const [RightReferralLink, setRightReferralLink] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const left_link = Cookies.get("left_referral_link");
    const right_link = Cookies.get("right_referral_link");

    if (left_link) {
      console.log("left got from cookie");

      setLeftReferralLink(left_link);
    }
    if (right_link) {
      console.log("right got from cookie");
      setRightReferralLink(right_link);
    }
  }, []);

  const handleCopyToClipboard = (e) => {
    console.log("copy: ", e);

    navigator.clipboard.writeText(e).then(
      setShowModal(true),
      setClipBoard("Copied..."),
      setTimeout(() => {
        setClipBoard("Copy to Clipboard");
      }, 2000)
    );
  };

  const generateDummyTree = (node, currentLevel = 0) => {
    // Base case: Stop at level 3, no children should be added beyond this level
    if (currentLevel >= maxLevel) {
      return {
        ...node,
        children: [], // No further children beyond Level 3
      };
    }

    node.children = node.children || [];

    const realChildren = node.children.filter(
      (child) => child.user_id !== null
    );

    if (realChildren.length > 0) {
      while (node.children.length < 2) {
        node.children.push({
          full_name: "",
          user_id: null,
          referral_id: null,
          level: currentLevel + 1,
          position: node.children.length === 0 ? "right" : "left", // Balance the tree
          pair_number: node.pair_number,
          total_commission_adrx: 0,
          total_commission_usdt: 0,
          direct_commission_adrx: 0,
          direct_commission_usdt: 0,
          left_commission_adrx: 0,
          left_commission_usdt: 0,
          right_commission_adrx: 0,
          right_commission_usdt: 0,
          binary_commission_adrx: 0,
          binary_commission_usdt: 0,
          children: [],
        });
      }
      node.children = node.children.map((child) =>
        generateDummyTree(child, currentLevel + 1)
      );
    }

    return node; // Return the processed node
  };
  async function fetchReferralTree(user) {
    try {
      const response = await axios.get(
        `https://adrox-89b6c88377f5.herokuapp.com/referrals/nested-hierarchy-from-user/${user}/`
      );
      if (response?.data) {
        console.log("response: ", response?.data);

        const balancedReferralTree = generateDummyTree(response?.data);

        console.log(balancedReferralTree);

        setReferralTree(balancedReferralTree);
        // console.log("isTrue", Array.isArray(Object.values(referralTree))); // This will log true if it's an array, false otherwise
        if (balancedReferralTree && history.length == 1) {
          console.log("adding history...", history.length);

          setHistory([balancedReferralTree?.user_id]);
        }

        console.log("reffComm: ", response?.data?.direct_commission_usdt);
        setTotReferralComm(response?.data?.direct_commission_usdt);
        setDirectCommLeft(response?.data?.direct_commission_usdt_left);
        setDirectCommRight(response?.data?.direct_commission_usdt_right);

        setLeftReferralLink(response?.data?.left_referral_link);
        setRightReferralLink(response?.data?.right_referral_link);
      }
    } catch (error) {
      console.error("Error fetching referral tree:", error);
    }
  }

  useEffect(() => {
    if (userID === "") {
      return;
    }
    fetchReferralTree(userID);
  }, [userID]);

  // Fetch the referral tree data when the component loads
  useEffect(() => {
    const cookieId = Cookies.get("user_id");

    if (cookieId) {
      setUserID(cookieId);
    } else {
      window.location.href = "/landingPage";
    }
  }, []);

  useEffect(() => {
    // Function to set the max level based on the window width
    const updateMaxLevel = () => {
      const width = window.innerWidth;
      if (width > 1000) {
        setMaxLevel(3);
      } else if (width > 768 && width <= 1450) {
        setMaxLevel(2);
      } else if (width <= 768) {
        setMaxLevel(1);
      }
    };

    // Set the initial max level
    updateMaxLevel();

    // Add an event listener to handle window resize
    window.addEventListener("resize", updateMaxLevel);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateMaxLevel);
    };
  }, []);

  useEffect(() => {
    console.log("Updated referralTree: ", referralTree);
    // setHistory([...history, referralTree?.user_id]);
    if (history?.length == 0) {
      console.log("hi...");
      setHistory([...history, referralTree?.user_id]);
    }
  }, [referralTree]);

  useEffect(() => {
    // setHistory(referralTree);
    if (history?.length == 0) {
      setHistory([referralTree?.user_id]);
    }
    console.log("Updated History: ", history);
  }, [history]);

  // const currentNode = history?.length
  //   ? history[history.length - 1]
  //   : referralTree?.length > 0 &&
  //     Object.values(referralTree)?.find((node) => node.parent_id === null); // Root node where parent_id is null

  const handleNodeClick = (node) => {
    console.log("node clicked...", node);

    if (!node) {
      console.log("not node");
      return;
    }
    if (history?.length <= 0) {
      console.log("no history...");
      return;
    }

    if (history?.length > 0) {
      console.log("0");

      if (history[history.length - 1] == node) {
        //backtracking
        console.log("backtracking");
        const newHistory = [...history];
        newHistory.pop(); // Remove the current node from the history (backtracking)
        setHistory(newHistory);
        setUserID(newHistory[newHistory.length - 1]);
      } else {
        //foretracking
        console.log("foretracking");
        setHistory([...history, node]);
        console.log("history: ", history);
        setUserID(node);
      }
    } else {
      console.log("3");

      console.log("foretracking");
      setHistory([...history, node]);
      console.log("history: ", history);
      setUserID(node);
    }
  };

  // if (referralTree && Object.keys(referralTree).length > 0) {
  //   console.log("1");

  //   const children = Object.values(referralTree)?.filter(
  //     (n) => n?.parent_id === node.user_id
  //   );
  //   console.log("children: ", children);

  //   if (children?.length > 0) {
  //     console.log("2");

  //     // If the node has children, add it to the history and display its children
  //     setHistory([...history, node]);
  //     console.log("history: ", history);
  //     setUserID(history[history.length - 1]);
  //   } else if (history.length > 0 && currentNode.user_id === node.user_id) {
  //     console.log("3");

  //     // If the node is a root node, and there is a parent node in the history, backtrack
  //     const newHistory = [...history];
  //     newHistory.pop(); // Remove the current node from the history (backtracking)
  //     setHistory(newHistory);
  //     console.log("history: ", history);

  //     setUserID(newHistory[newHistory.length - 1]);
  //   } else {
  //     // If the node is neither root nor has children, do nothing
  //     return;
  //   }
  // }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[90vw] lg:w-8/12 z-50">
        <div className="flex flex-col sm:flex-row gap-3 sm:px-10 sm:p-5 justify-between">
          {/* <div className="flex flex-col gap-3 p-7 border border-slate-600 rounded-xl">
            <div>
              <a className="p-2 px-4 font-700 bg-slate-600 bg-opacity-15 rounded-lg">
                ADROX Friend Code
              </a>
            </div>
            <div className="flex gap-1 px-3">
              <p>{Cookies.get("referral_id") || "referral_id"}</p>
              <i
                className="ri-file-copy-line cursor-pointer hover:scale-110 hover:text-green-500 transition-all"
                onClick={() =>
                  handleCopyToClipboard(Cookies.get("referral_id"))
                }
              ></i>
            </div>
          </div> */}
          <div className="flex flex-col gap-3 p-7 border border-slate-600 rounded-xl">
            <div>
              <a className="p-2 px-4 font-700 bg-slate-600 bg-opacity-15 rounded-lg">
                Total Referral Commissions
              </a>
            </div>
            <div className="flex gap-1 px-3">
              <p>{totReferralComm} USDT</p>
              {/* <i className="ri-file-copy-line"></i> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col p-3 sm:p-10 mt-10 bg-white bg-opacity-5 w-full">
          <div className="upper flex justify-center p-2 sm:p-10 items-start w-full">
            <div className="flex justify-evenly w-ful items-center ">
              <img
                src={leftLink}
                style={{
                  maxHeight: "10em",
                  // width: `calc(100% - 50%)`,

                  margin: "auto",
                }}
                className="w-20 sm:w-60 md:w-72 lg:w-80 max-sm:h-24 "
              />
              <img src={adam3} className="w-20 sm:w-32 h-20 sm:h-32" />
              <img
                src={rightLink}
                style={{
                  maxHeight: "10em",
                  // width: `calc(100% - 50%)`,
                  margin: "auto",
                }}
                className="w-20 sm:w-60 md:w-72 lg:w-80 max-sm:h-24 "
              />
            </div>
          </div>
          <div className="lower flex justify-between text-center">
            <div className="left flex flex-col gap-10 ">
              <div className="flex justify-center">
                <div className="flex flex-col gap-3 p-3 sm:px-10 bg-slate-600 bg-opacity-15 rounded-2xl">
                  <p className="font-400 text-[20px] sm:text-[24px]">Left</p>
                  <p className="font-800 text-[40px] sm:text-[64px] text-[#AB00FF] text-sha">
                    {directCommLeft}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 p-7 border border-slate-600 rounded-xl">
                <div>
                  <a className="p-2 px-4 font-700 bg-slate-600 bg-opacity-15 rounded-lg">
                    ADROX Left Link
                  </a>
                </div>
                <div className="flex gap-1 px-3">
                  <p>{leftReferralLink.slice(-10) || "referral_id"}</p>
                  <i
                    className="ri-file-copy-line cursor-pointer hover:scale-110 hover:text-green-500 transition-all"
                    onClick={() =>
                      handleCopyToClipboard(leftReferralLink.slice(-8))
                    }
                  ></i>
                </div>
                <div className="flex gap-1">
                  <i className="ri-link-m"></i>
                  <p
                    className="hover:underline cursor-pointer hover:text-slate-400"
                    onClick={() => {
                      window.open(leftReferralLink, "_blank");
                    }}
                  >
                    {leftReferralLink.slice(0, 33) + "..." || "referral link"}
                  </p>
                  <i
                    className="ri-file-copy-line cursor-pointer hover:scale-110 hover:text-green-500 transition-all"
                    onClick={() => handleCopyToClipboard(leftReferralLink)}
                  ></i>{" "}
                </div>
              </div>
            </div>
            <div className="right flex flex-col gap-10">
              <div className="flex justify-center">
                <div className="flex flex-col gap-3 p-3 sm:px-10 bg-slate-600 bg-opacity-15 rounded-2xl">
                  <p className="font-400 text-[20px] sm:text-[24px]">Right</p>
                  <p className="font-800 text-[40px] sm:text-[64px] text-[#AB00FF]">
                    {directCommRight}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 p-7 border border-slate-600 rounded-xl">
                <div>
                  <a className="p-2 px-4 font-700 bg-slate-600 bg-opacity-15 rounded-lg">
                    ADROX Right Link
                  </a>
                </div>
                <div className="flex gap-1 px-3">
                  <p>{RightReferralLink.slice(-10) || "referral_id"}</p>
                  <i
                    className="ri-file-copy-line cursor-pointer hover:scale-110 hover:text-green-500 transition-all"
                    onClick={() =>
                      handleCopyToClipboard(RightReferralLink.slice(-8))
                    }
                  ></i>
                </div>
                <div className="flex gap-1">
                  <i className="ri-link-m"></i>
                  <p
                    className="hover:underline cursor-pointer hover:text-slate-400"
                    onClick={() => {
                      window.open(leftReferralLink, "_blank");
                    }}
                  >
                    {RightReferralLink.slice(0, 33) + "..." || "referral link"}
                  </p>
                  <i
                    className="ri-file-copy-line cursor-pointer hover:scale-110 hover:text-green-500 transition-all"
                    onClick={() => handleCopyToClipboard(RightReferralLink)}
                  ></i>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Referral Tree starts here */}
      <div className="py-40 p-20" style={{}}>
        <TreeNode node={referralTree} setUser={(e) => handleNodeClick(e)} />
      </div>

      <div className="absolute right-[-30%] w-[80%] top-[40rem]">
        <img src={ellipse}></img>
      </div>
      <div className="absolute left-[-30%] w-[80%] top-0">
        <img src={ellipse}></img>
      </div>

      <div>
        {showModal && (
          <CopiedModal
            closeModal={() => setShowModal(false)}
            text="Copied to Clipboard."
          />
        )}
      </div>
    </div>
  );
}

// Recursive component to render the tree
const TreeNode = ({ node, setUser }) => {
  // if(!node) return null;
  const [parentId, setParentId] = useState(node?.user_id);

  const [firstLevelBComm, setFirstLevelBComm] = useState(0);
  const [dataUpdated, setDataUpdated] = useState(false); //when data is updated, it is used to highlight the updating data in UI

  useEffect(() => {
    let interval;

    const updateReferralTree = async () => {
      // if (node?.level === 0) {
      const userID = node.user_id;
      if (userID) {
        try {
          const response = await fetch(
            `https://adrox-89b6c88377f5.herokuapp.com/referrals/nested-hierarchy-live-profit-from-user/${userID}`
          );
          const responseData = await response.json();
          console.log("responseData: ", responseData);

          setFirstLevelBComm(responseData?.binary_commission);
          // console.log("parentId: ", parentId);
        } catch (error) {
          console.error("Error fetching referral tree:", error);
        }
      }
    };
    // };

    if (node) {
      updateReferralTree(); // Fetch the data immediately on mount
      // setParentId(node?.userID)
      interval = setInterval(updateReferralTree, 10000); // Fetch the data every 10 seconds
    }

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [node]);

  useEffect(() => {
    setDataUpdated(true);
    // console.log("dataUpdatedOut: ", dataUpdated);
    setTimeout(() => {
      setDataUpdated(false);
      // console.log("dataUpdatedIn: ", dataUpdated);
    }, 200);
  }, [firstLevelBComm]);

  const handleSetUser = (user) => {
    console.log("userId: ", user);
    // setUser(user);
    console.log("parentId: ", parentId);
  };

  return (
    <div
      className="flex flex-col items-center"
      style={{
        width: node?.level === 0 ? "100%" : "50%",
        order: node?.position === "right" ? 1 : 0,
      }}
    >
      <div
        className="flex flex-col gap-5 justify-center items-center p-3 bg-slate-600 bg-opacity-20 rounded-2xl hover:scale-105 cursor-pointer transition-[1000ms] z-50 hover:shadow-[10px] shadow-sm shadow-white"
        // border-slate-600 border
        onClick={() => setUser(node?.user_id)}
      >
        {node ? (
          <img src={adam2} className="w-20"></img>
        ) : (
          <img src={userImg} className="w-20 mx-14"></img>
        )}
        <h3 className="text-[20px] font-700">
          {node?.full_name || "Refer a friend"}
          {/* <br />
          {node?.position} */}
        </h3>
        {/* <p className="font-bold">{node?.full_name}</p> */}
        <div
          className="flex text-[24px] font-200 justify-evenly w-full border border-slate-600 rounded-lg"
          style={{ fontSize: "0.9em", gap: "1em" }}
        >
          <p className=" p-1">
            {Math.round(node?.direct_commission_adrx_left) || "0"}&nbsp;ADX (
            {Math.round(node?.direct_commission_usdt_left) || "0"}
            &nbsp;
            <img
              src="/usdtLogo.png"
              className="w-4 h-4"
              alt="$"
              style={{
                all: "unset",
                width: "1em",
                margin: "auto",
                alignSelf: "center",
              }}
            />
            )
          </p>
          &#124;
          <p className=" p-1">
            {Math.round(node?.direct_commission_adrx_right) || "0"}&nbsp;ADX (
            {Math.round(node?.direct_commission_usdt_right) || "0"}&nbsp;
            <img
              src="/usdtLogo.png"
              className="w-4 h-4"
              alt="$"
              style={{
                all: "unset",
                width: "1em",
                margin: "auto",
                alignSelf: "center",
              }}
            />
            )
          </p>
        </div>
        {/* {node?.level === 0 && ( */}
        <div
          style={{
            display: "flex",
            fontSize: "0.9em",
            gap: "1em",
            border: "1px solid #475569",
            fontWeight: "500",
            padding: "0.5em",
            borderRadius: "0.25em",
            background: "#0F011A",
          }}
        >
          <p
            style={{
              scale: `${dataUpdated ? "1.2" : ""}`,
              textShadow: `${dataUpdated ? "0px 0px 10px white" : ""}`,
              transition: "all 600ms ease",
            }}
          >
            {Math.round(firstLevelBComm)}&nbsp;ADX Paired
          </p>
        </div>
        {/* )} */}
      </div>
      {node?.children && node?.children.length > 0 && (
        // <div className="flex space-x-8">
        //   {node.children.map((child) => (
        //     <TreeNode key={child.user_id} node={child} />
        //   ))}
        // </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={doubleLink2}
            // className={ ` ${ node?.level == 0 ?
            //   "w-[50rem] h-80" : node?.level == 1 ?
            //     "w-96 h-52" : node?.level == 2 ? "w-48 h-24" : ""
            //   }` }

            style={{
              maxHeight: "10em",
              width: `calc(100% - 45%)`,
              margin: "auto",
            }}
          ></img>
          <div className="flex gap-5 justify-between w-full">
            {node?.children?.map((child, index) => (
              <TreeNode key={index} node={child} setUser={setUser} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
