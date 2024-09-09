import React, { useEffect, useState } from "react";
import leftLink from "./assets/leftLink.png";
import rightLink from "./assets/rightLink.png";
import doubleLink1 from "./assets/doubleLink1.png";
import doubleLink2 from "./assets/doubleLink2.png";
import adam2 from "./assets/adam2.png";
import userImg from "./assets/userImg.png";
import adam3 from "./assets/adam3.png";
import ellipse from "./assets/ellipse.png";

import Cookies from "js-cookie";
import axios from "axios";

import dummyData from "../dummyData.json";

export default function Link() {
  const [newTree, setNewTree] = useState([]);
  const [referralTree, setReferralTree] = useState(null);

  const [userID, setUserID] = useState("");
  const [maxLevel, setMaxLevel] = useState(3); // default value

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
  }, [referralTree]);

  // if (referralTree.length > 0) {
  //   const tree = buildTree(referralTree);
  //   console.log(JSON.stringify(tree, null, 2));
  //   if (tree) {
  //     setNewTree(tree);
  //   }
  // }

  // const data = [/* your JSON data here */];

  // Helper function to build the tree
  // function buildTree(nodes) {
  //   const nodeMap = new Map();

  //   // Create node entries
  //   nodes.forEach((node) => {
  //     nodeMap.set(node.user_id, { ...node, children: [] });
  //   });

  //   const root = nodeMap.get(nodes.find((node) => node.level === 0).user_id);

  //   // Assign children to parents
  //   nodes.forEach((node) => {
  //     if (node.level > 0) {
  //       const parentNodeId = findParentNodeId(node);
  //       const parentNode = nodeMap.get(parentNodeId);
  //       parentNode.children.push(nodeMap.get(node.user_id));
  //     }
  //   });

  //   return root;
  // }

  // // Find the parent node ID for a given node
  // function findParentNodeId(node) {
  //   const parentLevel = node.level - 1;
  //   const parentPairNumber = Math.floor(node.pair_number / 2);
  //   const position = node.position === "left" ? "left" : "right";

  //   return node.find(
  //     (n) => n.level === parentLevel && n.pair_number === parentPairNumber
  //   ).user_id;
  // }

  // // Build the tree

  // const buildTree = (data) => {
  //   const tree = [];
  //   const mappedArr = {};
  //   let arrElem;
  //   let mappedElem;

  //   // First map the nodes of the array to an object -> create a hash table
  //   for (let i = 0; i < data.length; i++) {
  //     arrElem = data[i];
  //     mappedArr[arrElem.user_id] = {
  //       ...arrElem,
  //       left: null,
  //       right: null,
  //       children: [],
  //     };
  //   }

  //   for (const user_id in mappedArr) {
  //     if (mappedArr.hasOwnProperty(user_id)) {
  //       mappedElem = mappedArr[user_id];
  //       // If the element is not at the root level, add it to its parent array of children
  //       if (mappedElem.sponsor_id) {
  //         const parent = mappedArr[mappedElem.sponsor_id];
  //         if (mappedElem.position === "left") {
  //           parent.left = mappedElem;
  //         } else if (mappedElem.position === "right") {
  //           parent.right = mappedElem;
  //         }
  //         parent.children.push(mappedElem); // Still add to children for easier recursive rendering
  //       } else {
  //         // If the element is at the root level, add it to the tree
  //         tree.push(mappedElem);
  //       }
  //     }
  //   }

  //   return tree;
  // };

  // const buildTree = (data) => {
  //   const mappedArr = {};

  //   data.forEach(user => {
  //       mappedArr[user.user_id] = { ...user, left: null, right: null, children: [] };
  //   });

  //   let root = null;

  //   data.forEach(user => {
  //       if (user.sponsor_id) {
  //           const parent = mappedArr[user.sponsor_id];
  //           if (user.position === 'left') {
  //               parent.left = mappedArr[user.user_id];
  //           } else if (user.position === 'right') {
  //               parent.right = mappedArr[user.user_id];
  //           }
  //           parent.children.push(mappedArr[user.user_id]);  // Also add to children for general traversal
  //       } else {
  //           root = mappedArr[user.user_id];  // Root node (super parent)
  //       }
  //   });

  //   return root;
  // };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[90vw] lg:w-8/12 z-50">
        <div className="flex flex-col sm:flex-row gap-3 sm:px-10 sm:p-5 justify-between">
          <div className="flex flex-col gap-3 p-7 border border-slate-600 rounded-xl">
            <div>
              <a className="p-2 px-4 font-700 bg-slate-600 bg-opacity-15 rounded-lg">
                ADROX Friend Code
              </a>
            </div>
            <div className="flex gap-1 px-3">
              <p>{Cookies.get("referral_id") || "referral_id"}</p>
              <i className="ri-file-copy-line cursor-pointer"></i>
            </div>
            {/* <div className="flex gap-1">
              <i className="ri-link-m"></i>
              <p>https://www.adrox.com/invite....</p>
              <i className="ri-file-copy-line"></i>
            </div> */}
          </div>
          <div className="flex flex-col gap-3 p-7 border border-slate-600 rounded-xl">
            <div>
              <a className="p-2 px-4 font-700 bg-slate-600 bg-opacity-15 rounded-lg">
                Total Referral Commissions
              </a>
            </div>
            <div className="flex gap-1 px-3">
              <p>120 USDT</p>
              {/* <i className="ri-file-copy-line"></i> */}
            </div>
            {/* <div className="flex gap-1">
              <i className="ri-link-m"></i>
              <p>https://www.adrox.com/invite....</p>
              <i className="ri-file-copy-line"></i>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col p-10 mt-10 bg-white bg-opacity-5">
          <div className="upper flex justify-center p-10 items-start ">
            <div className="flex justify-evenly w-full">
              <img
                src={leftLink}
                style={{
                  maxHeight: "10em",
                  width: `calc(100% - 60%)`,
                  margin: "auto",
                }}
              />
              <img src={adam3} className="w-32 h-32" />
              <img
                src={rightLink}
                style={{
                  maxHeight: "10em",
                  width: `calc(100% - 60%)`,
                  margin: "auto",
                }}
              />
            </div>
          </div>
          <div className="lower flex justify-between">
            <div className="left flex flex-col gap-10">
              <div className="flex justify-center">
                <div className="flex flex-col gap-3 p-3 px-10 bg-slate-600 bg-opacity-15 rounded-2xl">
                  <p className="font-400 text-[24px]">Left</p>
                  <p className="font-800 text-[64px] text-[#AB00FF] text-sha">
                    0
                  </p>
                </div>
              </div>
              {/* <div className="flex flex-col gap-3 p-7 border border-slate-600 rounded-xl">
              <div>
                <a className="p-2 px-4 font-700 bg-slate-600 bg-opacity-15 rounded-lg">
                  ADROX Left Link
                </a>
              </div>
              <div className="flex gap-1">
                <p>CDY56KASJGB</p>
                <i className="ri-file-copy-line"></i>
              </div>
              <div className="flex gap-1">
                <i className="ri-link-m"></i>
                <p>https://www.adrox.com/invite....</p>
                <i className="ri-file-copy-line"></i>
              </div>
            </div> */}
            </div>
            <div className="right flex flex-col gap-10">
              <div className="flex justify-center">
                <div className="flex flex-col gap-3 p-3 px-10 bg-slate-600 bg-opacity-15 rounded-2xl">
                  <p className="font-400 text-[24px]">Right</p>
                  <p className="font-800 text-[64px] text-[#AB00FF]">0</p>
                </div>
              </div>
              {/* <div className="flex flex-col gap-3 p-7 border border-slate-600 rounded-xl">
              <div>
                <a className="p-2 px-4 font-700 bg-slate-600 bg-opacity-15 rounded-lg">
                  ADROX Right Link
                </a>
              </div>
              <div className="flex gap-1">
                <p>CDY56KASJGB</p>
                <i className="ri-file-copy-line"></i>
              </div>
              <div className="flex gap-1">
                <i className="ri-link-m"></i>
                <p>https://www.adrox.com/invite....</p>
                <i className="ri-file-copy-line"></i>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Referral Tree starts here */}
      <div className="py-40 p-20" style={{}}>
        <TreeNode node={referralTree} setUser={setUserID} />
      </div>

      {/* <div className="mt-56">
        <div className="flex justify-center">
          <div className="flex flex-col gap-10 justify-center items-center p-10 bg-slate-600 bg-opacity-20 rounded-2xl w-96 border-slate-600 border ">
            <img src={adam2} className="w-20"></img>
            <p className="text-[32px] font-700">ADROX 001</p>
            <div className="flex gap-5 text-[24px] font-200 justify-evenly w-full border border-slate-600 rounded-lg">
              <p className=" p-1 px-4">800</p>|<p className=" p-1 px-4">910</p>
            </div>
            <div>
              <span className="p-2 px-4 border border-slate-600 rounded">
                800 Paired
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={doubleLink1} className="w-6/12"></img>
        </div>

        <div className="flex justify-center">
          <div className="flex justify-between w-4/5 p-7 px-20">
            <div className="flex flex-col gap-5 justify-center items-center p-7 bg-slate-600 bg-opacity-20 rounded-2xl w-72 border-slate-600 border ">
              <img src={adam2} className="w-20"></img>
              <p className="text-[20px] font-700">ADROX 001</p>
              <div className="flex text-[24px] font-200 justify-center w-full">
                <p className="bg-[#AB00FF] shadow-2xl rounded-l-lg  px-7">
                  800
                </p>
                <p className="bg-[#AB00FF] shadow-2xl rounded-r-lg  px-7">
                  910
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 justify-center items-center p-7 bg-slate-600 bg-opacity-20 rounded-2xl w-72 border-slate-600 border ">
              <img src={adam2} className="w-20"></img>
              <p className="text-[20px] font-700">ADROX 001</p>
              <div className="flex text-[24px] font-200 justify-center w-full">
                <p className="bg-[#AB00FF] shadow-2xl rounded-l-lg px-7">800</p>
                <p className="bg-[#AB00FF] shadow-2xl rounded-r-lg px-7">910</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex justify-between w-3/4">
            <img src={doubleLink2} className="w-96"></img>
            <img src={doubleLink2} className="w-96"></img>
          </div>
        </div>

        <div className="flex justify-evenly p-5">
          <div className="left flex justify-around w-1/2">
            <div className="flex flex-col gap-5 justify-center items-center p-7 bg-slate-600 bg-opacity-20 rounded-2xl w-56 border-slate-600 border ">
              <img src={adam2} className="w-14"></img>
              <p className="text-[16px] font-700">ADROX 001</p>
              <div className="flex text-[12px] font-100 justify-center w-full">
                <p className="bg-[#AB00FF] shadow-2xl rounded-l-lg px-7">800</p>
                <p className="bg-[#AB00FF] shadow-2xl rounded-r-lg px-7">910</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 justify-center items-center p-7 bg-slate-600 bg-opacity-20 rounded-2xl w-56 border-slate-600 border ">
              <img src={adam2} className="w-14"></img>
              <p className="text-[16px] font-700">ADROX 001</p>
              <div className="flex text-[12px] font-100 justify-center w-full">
                <p className="bg-[#AB00FF] shadow-2xl rounded-l-lg px-7">800</p>
                <p className="bg-[#AB00FF] shadow-2xl rounded-r-lg px-7">910</p>
              </div>
            </div>
          </div>

          <div className="right flex justify-around w-1/2">
            <div className="flex flex-col gap-5 justify-center items-center p-7 bg-slate-600 bg-opacity-20 rounded-2xl w-56 border-slate-600 border ">
              <img src={adam2} className="w-14"></img>
              <p className="text-[16px] font-700">ADROX 001</p>
              <div className="flex text-[12px] font-100 justify-center w-full">
                <p className="bg-[#AB00FF] shadow-2xl rounded-l-lg px-7">800</p>
                <p className="bg-[#AB00FF] shadow-2xl rounded-r-lg px-7">910</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center p-7 bg-slate-600 bg-opacity-20 rounded-2xl w-56 border-slate-600 border ">
              <img src={adam2} className="w-14"></img>
              <p className="text-[16px] font-700">ADROX 001</p>
              <div className="flex text-[12px] font-100 justify-center w-full">
                <p className="bg-[#AB00FF] shadow-2xl rounded-l-lg px-7">800</p>
                <p className="bg-[#AB00FF] shadow-2xl rounded-r-lg px-7">910</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="absolute right-[-30%] w-[80%] top-[40rem]">
        <img src={ellipse}></img>
      </div>
      <div className="absolute left-[-30%] w-[80%] top-0">
        <img src={ellipse}></img>
      </div>
    </div>
  );
}

// wewewee
// // const TreeNode = ({ node }) => {
// //   console.log("node: ", node);

// //   const [level, setLevel] = useState();

// //   return (
// //     <div className="flex flex-col items-center">
// //       {node.map((node) => (
// //         <>
// //           {node?.level == 0 && (
// //             <div className="flex flex-col gap-5 justify-center items-center p-5 bg-slate-600 bg-opacity-20 rounded-2xl border-slate-600 border ">
// //               {node ? (
// //                 <img src={adam2} className="w-20"></img>
// //               ) : (
// //                 <img src={userImg} className="w-20 mx-14"></img>
// //               )}

// //               <h3 className="text-[20px] font-700">
// //                 {node?.full_name || "Refer a friend"}
// //               </h3>
// //               <div className="flex gap-5 text-[24px] font-200 justify-evenly w-full border border-slate-600 rounded-lg">
// //                 <p className=" p-1 px-4">
// //                   {node?.direct_commission_usdt || "0"}
// //                 </p>
// //                 |
// //                 <p className=" p-1 px-4">
// //                   {Math.floor(node?.binary_commission_usdt) || "0"}
// //                 </p>
// //               </div>
// //             </div>
// //           )}
// //         </>
// //       ))}
// //       <img src={doubleLink1} className="w-[40rem]"></img>
// //       <div className="flex justify-evenly w-full">
// //         {node.map((node) => (
// //           <>
// //             {node?.level == 1 && (
// //               <div className="flex flex-col gap-5 justify-center items-center p-5 bg-slate-600 bg-opacity-20 rounded-2xl border-slate-600 border ">
// //                 {node ? (
// //                   <img src={adam2} className="w-20"></img>
// //                 ) : (
// //                   <img src={userImg} className="w-20 mx-14"></img>
// //                 )}

// //                 <h3 className="text-[20px] font-700">
// //                   {node?.full_name || "Refer a friend"}
// //                 </h3>
// //                 <div className="flex gap-5 text-[24px] font-200 justify-evenly w-full border border-slate-600 rounded-lg">
// //                   <p className=" p-1 px-4">
// //                     {node?.direct_commission_usdt || "0"}
// //                   </p>
// //                   |
// //                   <p className=" p-1 px-4">
// //                     {Math.floor(node?.binary_commission_usdt) || "0"}
// //                   </p>
// //                 </div>
// //               </div>
// //             )}
// //           </>
// //         ))}
// //       </div>
// //       <div className="flex justify-evenly w-full">
// //         <img src={doubleLink2} className="w-80"></img>
// //         <img src={doubleLink2} className="w-80"></img>
// //       </div>

// //       <div className="flex justify-evenly w-full">
// //         {node.map((node) => (
// //           <>
// //             {node?.level == 2 && (
// //               <div className="flex flex-col gap-5 justify-center items-center p-5 bg-slate-600 bg-opacity-20 rounded-2xl border-slate-600 border ">
// //                 {node ? (
// //                   <img src={adam2} className="w-20"></img>
// //                 ) : (
// //                   <img src={userImg} className="w-20 mx-14"></img>
// //                 )}

// //                 <h3 className="text-[20px] font-700">
// //                   {node?.full_name || "Refer a friend"}
// //                 </h3>
// //                 <div className="flex gap-5 text-[24px] font-200 justify-evenly w-full border border-slate-600 rounded-lg">
// //                   <p className=" p-1 px-4">
// //                     {node?.direct_commission_usdt || "0"}
// //                   </p>
// //                   |
// //                   <p className=" p-1 px-4">
// //                     {Math.floor(node?.binary_commission_usdt) || "0"}
// //                   </p>
// //                 </div>
// //               </div>
// //             )}
// //           </>
// //         ))}
// //       </div>

// //       <div className="flex justify-evenly w-full">
// //         <img src={doubleLink2} className="w-72"></img>
// //         <img src={doubleLink2} className="w-72"></img>
// //         <img src={doubleLink2} className="w-72"></img>
// //         <img src={doubleLink2} className="w-72"></img>
// //       </div>

// //       <div className="flex justify-between gap-3 w-full">
// //         {node.map((node) => (
// //           <>
// //             {node?.level == 3 && (
// //               <div className="flex flex-col gap-5 justify-center items-center p-5 bg-slate-600 bg-opacity-20 rounded-2xl border-slate-600 border ">
// //                 {node ? (
// //                   <img src={adam2} className="w-20"></img>
// //                 ) : (
// //                   <img src={userImg} className="w-20 mx-14"></img>
// //                 )}

// //                 <h3 className="text-[20px] font-700">
// //                   {node?.full_name || "Refer a friend"}
// //                 </h3>
// //                 <div className="flex gap-5 text-[24px] font-200 justify-evenly w-full border border-slate-600 rounded-lg">
// //                   <p className=" p-1 px-4">
// //                     {node?.direct_commission_usdt || "0"}
// //                   </p>
// //                   |
// //                   <p className=" p-1 px-4">
// //                     {Math.floor(node?.binary_commission_usdt) || "0"}
// //                   </p>
// //                 </div>
// //               </div>
// //             )}
// //           </>
// //         ))}
// //       </div>

// //       {/* {node?.children == null && level < 3 && (
// //         <div className="flex flex-col items-center justify-center">
// //           <img src={doubleLink2} className="w-96 h-64 "></img>

// //           <div className="flex gap-5 justify-between mt-4 w-full">
// //             Hello World
// //           </div>
// //         </div>
// //       )} */}
// //       {node?.children && node.children?.length > 0 && (
// //         <div className="flex flex-col items-center justify-center">
// //           <img src={doubleLink2} className="w-96 h-64 "></img>

// //           <div className="flex gap-5 justify-between mt-4 w-full">
// //             {node?.children?.map((child, index) => (
// //               <TreeNode key={index} node={child} />
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // const TreeNode = ({ nodes }) => {
// //   console.log("nodes: ", nodes);
// //   if (!nodes || nodes.length === 0) {
// //     return null;
// //   }

// //   return (
// //     <ul>
// //       {nodes.map((node) => (
// //         <li key={node.user_id}>
// //           <div className="flex">
// //             <strong>{node.full_name}</strong> (Level: {node.level}, Pair:{" "}
// //             {node.pair_number})
// //             <br />
// //             Total Commission: {node.total_commission_adrx} ADRX (
// //             {node.total_commission_usdt} USDT)
// //             <br />
// //             Direct Commission: {node.direct_commission_adrx} ADRX (
// //             {node.direct_commission_usdt} USDT)
// //             <br />
// //             Left Commission: {node.left_commission_adrx} ADRX (
// //             {node.left_commission_usdt} USDT)
// //             <br />
// //             Right Commission: {node.right_commission_adrx} ADRX (
// //             {node.right_commission_usdt} USDT)
// //             <br />
// //             Binary Commission: {node.binary_commission_adrx} ADRX (
// //             {node.binary_commission_usdt} USDT)
// //           </div>
// //           {/* Recursively render left and right children */}
// //           <TreeNode nodes={node.left ? [node.left] : []} />
// //           <TreeNode nodes={node.right ? [node.right] : []} />
// //         </li>
// //       ))}
// //     </ul>
// //   );
// // };

// const TreeNode = ({ node }) => {
//   return (
//     <div className={`flex flex-col items-center`}>
//       <div className="bg-blue-500 text-white p-2 rounded shadow-md">
//         {node.full_name}
//       </div>
//       <div className="text-sm mt-1 text-gray-500">
//         Commission: ${node.total_commission_usdt}
//       </div>
//     </div>
//   );
// };
// const Tree = ({ treeData }) => {
//   if(!treeData || treeData.length == 0) return;

//   console.log("TreeData: ", treeData);

//   // Group nodes by level
//   const groupedByLevel = treeData?.reduce((acc, node) => {
//     if (!acc[node.level]) acc[node.level] = [];
//     acc[node.level].push(node);
//     return acc;
//   }, {});

//   return (
//     <div className="flex flex-col items-center space-y-4">
//       {Object.keys(groupedByLevel).map((level) => (
//         <div key={level} className="flex justify-center space-x-4">
//           {groupedByLevel[level]
//             .sort((a, b) => a.pair_number - b.pair_number)
//             .map((node) => (
//               <div
//                 key={node.user_id}
//                 className={`${
//                   node.position === 'left' ? 'mr-8' : 'ml-8'
//                 }`} // Correct position swapping logic
//                 style={{ order: node.pair_number }}
//               >
//                 <TreeNode node={node} />
//               </div>
//             ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// const TreeNode = ({ node }) => {
//   console.log("node: ", node);

//   if (!node) {
//       return null;
//   }

//   return (
//       <div className="tree-node">
//           <div className="node-content">
//               <strong>{node.full_name}</strong> (Level: {node.level}, Pair: {node.pair_number})
//               <br />
//               Total Commission: {node.total_commission_adrx} ADRX ({node.total_commission_usdt} USDT)
//               <br />
//               Direct Commission: {node.direct_commission_adrx} ADRX ({node.direct_commission_usdt} USDT)
//               <br />
//               Left Commission: {node.left_commission_adrx} ADRX ({node.left_commission_usdt} USDT)
//               <br />
//               Right Commission: {node.right_commission_adrx} ADRX ({node.right_commission_usdt} USDT)
//               <br />
//               Binary Commission: {node.binary_commission_adrx} ADRX ({node.binary_commission_usdt} USDT)
//           </div>
//           <div className="children">
//               {/* Recursively render left and right children */}
//               <div className="left-child">{node.left && <TreeNode node={node.left} />}</div>
//               <div className="right-child">{node.right && <TreeNode node={node.right} />}</div>
//           </div>
//       </div>
//   );
// };

// const HierarchyTree = () => {
//   const [treeData, setTreeData] = useState(null);

//   useEffect(() => {

//       axios.get('/referrals/list-hierarchy/')
//           .then(response => {
//               const tree = buildTree(response.data);
//               setTreeData(tree);
//           })
//           .catch(error => {
//               console.error('Error fetching the hierarchy data:', error);
//           });
//   }, []);

//   return (
//       <div>
//           <h1>Referral Hierarchy Tree</h1>
//           {treeData && <TreeNode node={treeData} />}
//       </div>
//   );
// };

// export default HierarchyTree;

// Recursive component to render the tree
const TreeNode = ({ node, setUser }) => {
  // if(!node) return null;

  const [firstLevelBComm, setFirstLevelBComm] = useState(0);

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
          setFirstLevelBComm(responseData?.binary_commission);
        } catch (error) {
          console.error("Error fetching referral tree:", error);
        }
      }
    };
    // };

    if (node) {
      updateReferralTree(); // Fetch the data immediately on mount
      interval = setInterval(updateReferralTree, 10000); // Fetch the data every 10 seconds
    }

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [node]);

  return (
    <div
      className="flex flex-col items-center"
      style={{
        width: node?.level === 0 ? "100%" : "50%",
        order: node?.position === "right" ? 1 : 0,
      }}
    >
      <div
        className="flex flex-col gap-5 justify-center items-center p-3 bg-slate-600 bg-opacity-20 rounded-2xl"
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
          {Math.round(firstLevelBComm)}&nbsp;ADX Paired
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
