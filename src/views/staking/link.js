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

export default function Link() {
  const referralTree = {
    name: "Shafeeq Test",
    directCommission: "100",
    binaryCommission: "500",
    children: [
      {
        name: "Raj Test",
        directCommission: "700",
        binaryCommission: "300",
        children: [
          {
            name: "A",
            directCommission: "500",
            binaryCommission: "200",
          },
          {
            name: "B",
            directCommission: "600",
            binaryCommission: "250",
          },
        ],
      },
      {
        name: "Shiva Test",
        directCommission: "800",
        binaryCommission: "400",
        children: [
          {
            name: "C",
            directCommission: "400",
            binaryCommission: "150",
          },
          {
            name: "D",
            directCommission: "350",
            binaryCommission: "150",
          },
        ],
      },
    ],
  };

  const [currentNode, setCurrentNode] = useState(referralTree);
  // const [nodeNo, setNodeNo] = useState(3);

  useEffect(() => {
    console.log("Logged....");

    const nodeIndex = parseInt(localStorage.getItem("nodeIndex") || 1);
    // setNodeNo(localStorage.getItem("nodeNo") || 0);

    const nextNode = getNextNode(referralTree, nodeIndex);
    console.log("nextNode: ", nextNode);
    console.log("nodeIndex: ", nodeIndex);

    setCurrentNode(nextNode);
    // setNodeNo(nodeNo + 1);

    localStorage.setItem("nodeIndex", nodeIndex + 1);
    // localStorage.setItem("nodeNo", nodeNo +1);
  }, []);

  const getNextNode = (node, index) => {
    if (!node) return null; // Handle null or undefined node

    if (index === 1) {
      // Return only the parent node's details
      return {
        name: node.name,
        directCommission: node.directCommission,
        binaryCommission: node.binaryCommission,
        children: [],
      };
    }
    if (index == 2) {
      return {
        ...node,
        children: [
          null,
          {
            ...node.children?.[1],
            children: [], // Ensuring no further children are returned
          } || null,
        ],
      };
    }
    if (index == 3) {
      return {
        ...node,
        children: [
          {
            ...node.children?.[0],
            children: [], // Ensuring no further children are returned
          } || null,
          {
            ...node.children?.[1],
            children: [], // Ensuring no further children are returned
          } || null,
        ],
      };
    }
    if (index == 4) {
      return {
        ...node,
        children: [
          {
            ...node.children?.[0],
            children: [
              { ...node.children?.[0]?.children?.[0], children: [] } || null,
              null, // Ensuring no further children are returned
            ],
          } || null,
          {
            ...node.children?.[1],
            children: [], // Ensuring no further children are returned
          } || null,
        ],
      };
    }
    if (index == 5) {
      return {
        ...node,
        children: [
          {
            ...node.children?.[0],
          } || null,
          {
            ...node.children?.[1],
            children: [], // Ensuring no further children are returned
          } || null,
        ],
      };
    }

    if (index == 6) {
      return {
        ...node,
        children: [
          {
            ...node.children?.[0],
          } || null,
          {
            ...node.children?.[1],
            children: [
              { ...node.children?.[1]?.children?.[0], children: [] } || null,
              null, // Ensuring no further children are returned
            ],
          } || null,
        ],
      };
    }
    if (index == 7) {
      return {
        ...node,
        children: [
          {
            ...node.children?.[0],
          } || null,
          {
            ...node.children?.[1],
           
          } || null,
        ],
      };
    }

    return node; // Default case, though it may not be needed
  };

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
              <img src={leftLink} className="w-64 h-40"></img>
              <img src={adam3} className="w-32 h-32"></img>
              <img src={rightLink} className="w-64 h-40"></img>
            </div>
          </div>
          <div className="lower flex justify-between">
            <div className="left flex flex-col gap-10">
              <div className="flex justify-center">
                <div className="flex flex-col gap-3 p-3 px-10 bg-slate-600 bg-opacity-15 rounded-2xl">
                  <p className="font-400 text-[24px]">Left</p>
                  <p className="font-800 text-[64px] text-[#AB00FF] text-sha">
                    800
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
                  <p className="font-800 text-[64px] text-[#AB00FF]">910</p>
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
      <div className="py-40">
        <TreeNode node={currentNode} />
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

const TreeNode = ({ node }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-5 justify-center items-center p-5 bg-slate-600 bg-opacity-20 rounded-2xl border-slate-600 border ">
        {node ? (
          <img src={adam2} className="w-20"></img>
        ) : (
          <img src={userImg} className="w-20 mx-14"></img>
        )}

        <h3 className="text-[20px] font-700">
          {node?.name || "Refer a friend"}
        </h3>
        <div className="flex gap-5 text-[24px] font-200 justify-evenly w-full border border-slate-600 rounded-lg">
          <p className=" p-1 px-4">{node?.directCommission || "0"}</p>|
          <p className=" p-1 px-4">{node?.binaryCommission || "0"}</p>
        </div>
      </div>

      {/* {node?.children == null && level < 3 && (
        <div className="flex flex-col items-center justify-center">
          <img src={doubleLink2} className="w-96 h-64 "></img>

          <div className="flex gap-5 justify-between mt-4 w-full">
            Hello World
          </div>
        </div>
      )} */}

      {node?.children && node.children?.length > 0 && (
        <div className="flex flex-col items-center justify-center">
          <img src={doubleLink2} className="w-96 h-64 "></img>

          <div className="flex gap-5 justify-between mt-4 w-full">
            {node?.children?.map((child, index) => (
              <TreeNode key={index} node={child} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
