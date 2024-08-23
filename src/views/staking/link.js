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

export default function Link() {
  const [referralTree, setReferralTree] = useState([]);

  // Fetch the referral tree data when the component loads
  useEffect(() => {
    async function fetchReferralTree() {
      try {
        const response = await axios.get(
          "https://adrox-89b6c88377f5.herokuapp.com/referrals/list-hierarchy/"
        ); // Replace with your API endpoint
        if (response?.data) {
          console.log("response: ", response?.data);
          setReferralTree(response.data);
        }
      } catch (error) {
        console.error("Error fetching referral tree:", error);
      }
    }
    fetchReferralTree();

    // if (referralTree != []) {
    //   const tree = buildTree(referralTree);
    //   console.log(JSON.stringify(tree, null, 2));
    // }
  }, []);

  // const data = [/* your JSON data here */];

  // Helper function to build the tree
  function buildTree(nodes) {
    const nodeMap = new Map();

    // Create node entries
    nodes.forEach((node) => {
      nodeMap.set(node.user_id, { ...node, children: [] });
    });

    const root = nodeMap.get(nodes.find((node) => node.level === 0).user_id);

    // Assign children to parents
    nodes.forEach((node) => {
      if (node.level > 0) {
        const parentNodeId = findParentNodeId(node);
        const parentNode = nodeMap.get(parentNodeId);
        parentNode.children.push(nodeMap.get(node.user_id));
      }
    });

    return root;
  }

  // Find the parent node ID for a given node
  function findParentNodeId(node) {
    const parentLevel = node.level - 1;
    const parentPairNumber = Math.floor(node.pair_number / 2);
    const position = node.position === "left" ? "left" : "right";

    return node.find(
      (n) => n.level === parentLevel && n.pair_number === parentPairNumber
    ).user_id;
  }

  // Build the tree

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
        <TreeNode node={referralTree} />
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
  console.log("node: ", node);

  const [level, setLevel] = useState();

  return (
    <div className="flex flex-col items-center">
      {node.map((node) => (
        <>
          {node?.level == 0 && (
            <div className="flex flex-col gap-5 justify-center items-center p-5 bg-slate-600 bg-opacity-20 rounded-2xl border-slate-600 border ">
              {node ? (
                <img src={adam2} className="w-20"></img>
              ) : (
                <img src={userImg} className="w-20 mx-14"></img>
              )}

              <h3 className="text-[20px] font-700">
                {node?.full_name || "Refer a friend"}
              </h3>
              <div className="flex gap-5 text-[24px] font-200 justify-evenly w-full border border-slate-600 rounded-lg">
                <p className=" p-1 px-4">
                  {node?.direct_commission_usdt || "0"}
                </p>
                |
                <p className=" p-1 px-4">
                  {Math.floor(node?.binary_commission_usdt) || "0"}
                </p>
              </div>
            </div>
          )}
        </>
      ))}
      <img src={doubleLink1} className="w-[40rem]"></img>
      <div className="flex justify-evenly w-full">
        {node.map((node) => (
          <>
            {node?.level == 1 && (
              <div className="flex flex-col gap-5 justify-center items-center p-5 bg-slate-600 bg-opacity-20 rounded-2xl border-slate-600 border ">
                {node ? (
                  <img src={adam2} className="w-20"></img>
                ) : (
                  <img src={userImg} className="w-20 mx-14"></img>
                )}

                <h3 className="text-[20px] font-700">
                  {node?.full_name || "Refer a friend"}
                </h3>
                <div className="flex gap-5 text-[24px] font-200 justify-evenly w-full border border-slate-600 rounded-lg">
                  <p className=" p-1 px-4">
                    {node?.direct_commission_usdt || "0"}
                  </p>
                  |
                  <p className=" p-1 px-4">
                    {Math.floor(node?.binary_commission_usdt) || "0"}
                  </p>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      <div className="flex justify-evenly w-full">
        <img src={doubleLink2} className="w-80"></img>
        <img src={doubleLink2} className="w-80"></img>
      </div>

      <div className="flex justify-evenly w-full">
        {node.map((node) => (
          <>
            {node?.level == 2 && (
              <div className="flex flex-col gap-5 justify-center items-center p-5 bg-slate-600 bg-opacity-20 rounded-2xl border-slate-600 border ">
                {node ? (
                  <img src={adam2} className="w-20"></img>
                ) : (
                  <img src={userImg} className="w-20 mx-14"></img>
                )}

                <h3 className="text-[20px] font-700">
                  {node?.full_name || "Refer a friend"}
                </h3>
                <div className="flex gap-5 text-[24px] font-200 justify-evenly w-full border border-slate-600 rounded-lg">
                  <p className=" p-1 px-4">
                    {node?.direct_commission_usdt || "0"}
                  </p>
                  |
                  <p className=" p-1 px-4">
                    {Math.floor(node?.binary_commission_usdt) || "0"}
                  </p>
                </div>
              </div>
            )}
          </>
        ))}
      </div>

      <div className="flex justify-evenly w-full">
        <img src={doubleLink2} className="w-72"></img>
        <img src={doubleLink2} className="w-72"></img>
        <img src={doubleLink2} className="w-72"></img>
        <img src={doubleLink2} className="w-72"></img>
      </div>

      <div className="flex justify-between gap-3 w-full">
        {node.map((node) => (
          <>
            {node?.level == 3 && (
              <div className="flex flex-col gap-5 justify-center items-center p-5 bg-slate-600 bg-opacity-20 rounded-2xl border-slate-600 border ">
                {node ? (
                  <img src={adam2} className="w-20"></img>
                ) : (
                  <img src={userImg} className="w-20 mx-14"></img>
                )}

                <h3 className="text-[20px] font-700">
                  {node?.full_name || "Refer a friend"}
                </h3>
                <div className="flex gap-5 text-[24px] font-200 justify-evenly w-full border border-slate-600 rounded-lg">
                  <p className=" p-1 px-4">
                    {node?.direct_commission_usdt || "0"}
                  </p>
                  |
                  <p className=" p-1 px-4">
                    {Math.floor(node?.binary_commission_usdt) || "0"}
                  </p>
                </div>
              </div>
            )}
          </>
        ))}
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
