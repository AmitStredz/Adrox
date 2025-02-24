import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import stroke from "./assets/strokeEffect.png";
import dollar from "./assets/dollarBlue.png";
import Modal from "./sucessModal";
import Cookies from "js-cookie";

// import Web3 from "web3";
// import BigNumber from "bignumber.js";

// const USDTContractAddress = "0x55d398326f99059fF775485246999027B3197955"; // BEP-20 USDT contract address
// const USDTAbi = [
//   {
//     inputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "owner",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "spender",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "Approval",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "previousOwner",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "newOwner",
//         type: "address",
//       },
//     ],
//     name: "OwnershipTransferred",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       { indexed: true, internalType: "address", name: "from", type: "address" },
//       { indexed: true, internalType: "address", name: "to", type: "address" },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "Transfer",
//     type: "event",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "_decimals",
//     outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "_name",
//     outputs: [{ internalType: "string", name: "", type: "string" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "_symbol",
//     outputs: [{ internalType: "string", name: "", type: "string" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [
//       { internalType: "address", name: "owner", type: "address" },
//       { internalType: "address", name: "spender", type: "address" },
//     ],
//     name: "allowance",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { internalType: "address", name: "spender", type: "address" },
//       { internalType: "uint256", name: "amount", type: "uint256" },
//     ],
//     name: "approve",
//     outputs: [{ internalType: "bool", name: "", type: "bool" }],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [{ internalType: "address", name: "account", type: "address" }],
//     name: "balanceOf",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
//     name: "burn",
//     outputs: [{ internalType: "bool", name: "", type: "bool" }],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "decimals",
//     outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { internalType: "address", name: "spender", type: "address" },
//       { internalType: "uint256", name: "subtractedValue", type: "uint256" },
//     ],
//     name: "decreaseAllowance",
//     outputs: [{ internalType: "bool", name: "", type: "bool" }],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "getOwner",
//     outputs: [{ internalType: "address", name: "", type: "address" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
//     name: "mint",
//     outputs: [{ internalType: "bool", name: "", type: "bool" }],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "name",
//     outputs: [{ internalType: "string", name: "", type: "string" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "owner",
//     outputs: [{ internalType: "address", name: "", type: "address" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [],
//     name: "renounceOwnership",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "symbol",
//     outputs: [{ internalType: "string", name: "", type: "string" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: true,
//     inputs: [],
//     name: "totalSupply",
//     outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
//     payable: false,
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { internalType: "address", name: "recipient", type: "address" },
//       { internalType: "uint256", name: "amount", type: "uint256" },
//     ],
//     name: "transfer",
//     outputs: [{ internalType: "bool", name: "", type: "bool" }],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [
//       { internalType: "address", name: "sender", type: "address" },
//       { internalType: "address", name: "recipient", type: "address" },
//       { internalType: "uint256", name: "amount", type: "uint256" },
//     ],
//     name: "transferFrom",
//     outputs: [{ internalType: "bool", name: "", type: "bool" }],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     constant: false,
//     inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
//     name: "transferOwnership",
//     outputs: [],
//     payable: false,
//     stateMutability: "nonpayable",
//     type: "function",
//   },
// ];

const Deposit = ({ onClose }) => {
  // const navigate = useNavigate();
  // const [amount, setAmount] = useState(""); // State for deposit amount
  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  const [showModal, setShowModal] = useState(false);

  const [walletAddress, setWalletAddress] = useState("");
  const [dollarValue, setDollarValue] = useState("");
  const [transactionHash, setTransactionHash] = useState("");
  const [transactionStatus, setTransactionStatus] = useState(null); // To store transaction status
  const [errorText, setErrorText] = useState("");
  const [isErrorModal, setIsErrorModal] = useState(false);
  const [phoneLoginLink, setPhoneLoginLink] = useState("");
  const [walletId, setWalletId] = useState("");

  useEffect(() => {
    const storedWalletId = Cookies.get("wallet_id");
    if (storedWalletId) {
      setWalletId(storedWalletId);
    }
  }, []);

  // useEffect(() => {
  //   const storedAddress = localStorage.getItem("walletAddress");
  //   if (storedAddress) {
  //     console.log("Wallet address retrieved from localStorage:", storedAddress);
  //     setWalletAddress(storedAddress);
  //   }
  // }, []);

  // useEffect(() => {
  //   // Check transaction status when transactionHash changes
  //   if (transactionHash) {
  //     console.log("Verifying transaction status for hash:", transactionHash);
  //     verifyTransactionStatus();
  //   }
  // }, [transactionHash]);

  const handleDeposit = async () => {
    setIsLoading(true);

    if (dollarValue < 20) {
      alert("Minimum Deposit Amount: 20$");
      setIsLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        "https://adrox-5ed452640f6d.herokuapp.com/api/wallet/deposit/",
        {
          wallet_id: walletId,
          amount: dollarValue,
        }
      );
      console.log("depositResponse: ", response);

      // console.log("Amount: ", amount);
      // Cookies.set("balance", response.data.balance);

      if (response.status === 200) {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          onClose();
          // navigate("/wallet");
        }, 2000);
      } else {
        alert("No response");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error?.response?.data?.error == "Wallet not found") {
        alert("Wallet not found. Try re-logging in");
      } else {
        alert("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // const handleButtonClick = async () => {
  //   console.log("Button clicked - attempting transaction...");

  //   try {
  //     setIsLoading(true);

  //     console.log("token generating...");
  //     await generateToken();
  //     console.log("token generated: ", phoneLoginLink || "amit");

  //     console.log("Connecting to MetaMask...");
  //     await connectMetaMask();
  //     console.log("MetaMask connected, sending USDT transaction...");
  //     await sendUsdtTransaction();
  //     console.log("Transaction is successfull...");
  //     await handleSendAPI();
  //     // setTransactionIsCompleted(true);
  //   } catch (error) {
  //     console.error("Transaction error:", error.message);
  //     setErrorText(error.message || "An error occurred. Please try again.");
  //     setIsErrorModal(true);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const generateToken = async () => {
  //   const userId = Cookies.get("user_id");

  //   if (!userId) {
  //     console.log("user_id not found...");
  //     throw new Error("user_id not found");
  //   }

  //   try {
  //     const response = await fetch(
  //       `https://adrox-5ed452640f6d.herokuapp.com/api/users/generate-login-link/?user_id=${userId}`
  //     );
  //     const data = await response.json();

  //     console.log("data: ", data);

  //     if (data?.error === "User not found.") {
  //       throw new Error("User not found");
  //     }

  //     if (data?.login_link) {
  //       console.log("phone link is set...");
  //       setPhoneLoginLink(data?.login_link); // Adjust the property to match your API response
  //     }
  //   } catch (error) {
  //     console.error("Error fetching token:", error);
  //     throw new Error("Error fetching token");
  //   }
  // };

  // const connectMetaMask = async () => {
  //   if (!window.ethereum) {
  //     const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  //     // Check if user is on a mobile device
  //     if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
  //       console.log("Mobile device detected, opening MetaMask app...");

  //       try {
  //         await generateToken(); // Ensure token is generated successfully
  //         console.log("Login link generated: ", phoneLoginLink);

  //         // Check if the phoneLoginLink was successfully generated
  //         if (phoneLoginLink) {
  //           const deepLink = phoneLoginLink;
  //           window.open(deepLink, "_blank"); // Open the generated link
  //         } else {
  //           throw new Error("Failed to generate login link.");
  //         }
  //       } catch (error) {
  //         console.error(
  //           "Error generating token or opening MetaMask:",
  //           error.message
  //         );
  //         throw new Error(
  //           "Unable to generate login link or connect to MetaMask."
  //         );
  //       }
  //       return;
  //     } else {
  //       throw new Error(
  //         "MetaMask not detected. Please install MetaMask and try again."
  //       );
  //     }
  //   }

  //   try {
  //     const accounts = await window.ethereum.request({
  //       method: "eth_requestAccounts",
  //     });
  //     if (!accounts || accounts.length === 0)
  //       throw new Error("MetaMask account not found");

  //     console.log("MetaMask accounts:", accounts);
  //     setWalletAddress(accounts[0]);
  //     localStorage.setItem("walletAddress", accounts[0]);
  //   } catch (error) {
  //     console.error("Failed to connect MetaMask:", error);
  //     throw new Error("MetaMask connection failed. Please try again.");
  //   }
  // };

  // const sendUsdtTransaction = async () => {
  //   if (isLoading) return;
  //   if (!walletAddress)
  //     throw new Error("Wallet not connected. Please connect to MetaMask.");

  //   if (parseFloat(dollarValue) <= 0) throw new Error("Enter a valid amount");

  //   const web3 = new Web3(window.ethereum);
  //   const usdtContract = new web3.eth.Contract(USDTAbi, USDTContractAddress);
  //   const amountInWei = new BigNumber(dollarValue)
  //     .multipliedBy("1000000000000000000")
  //     .toFixed();

  //   console.log("Sending transaction with amount (in Wei):", amountInWei);

  //   try {
  //     const tx = await usdtContract.methods
  //       .transfer("0x574A09778dD275DC6a8a4e0726db783e66E82572", amountInWei)
  //       .send({ from: walletAddress });

  //     console.log("Transaction sent, transaction hash:", tx.transactionHash);
  //     setTransactionHash(tx.transactionHash); // Store transaction hash for verification
  //   } catch (error) {
  //     console.error("Error during transaction:", error);

  //     if (error.code === 4001) {
  //       throw new Error("Transaction rejected by user.");
  //     } else if (error.code === -32000) {
  //       throw new Error("Insufficient funds or gas fees.");
  //     } else {
  //       throw new Error("Transaction failed. Please try again.");
  //     }
  //   }
  // };

  // // Function to verify transaction status
  // const verifyTransactionStatus = async () => {
  //   const web3 = new Web3(window.ethereum);

  //   try {
  //     const receipt = await web3.eth.getTransactionReceipt(transactionHash);

  //     if (receipt) {
  //       console.log("Transaction receipt:", receipt);

  //       if (receipt.status) {
  //         console.log("Transaction was successful.");
  //         setTransactionStatus("success");
  //       } else {
  //         console.log("Transaction failed.");
  //         setTransactionStatus("failed");
  //       }
  //     } else {
  //       console.log("Transaction is still pending...");
  //       setTransactionStatus("pending");
  //       setTimeout(verifyTransactionStatus, 3000); // Retry after 3 seconds
  //     }
  //   } catch (error) {
  //     console.error("Error verifying transaction status:", error);
  //     setTransactionStatus("error");
  //   }
  // };

  // // const WalletId = Cookies.get("wallet_id");
  // // // console.log("WalletId: ", WalletId);

  // //funtion to fetch the API after successfull transaction...
  // const handleSendAPI = async () => {
  //   setIsLoading(true);

  //   if (dollarValue < 20) {
  //     alert("Minimum Deposit Amount: 20$");
  //     setIsLoading(false);
  //     return;
  //   }
  //   try {
  //     const response = await axios.post(
  //       "https://adrox-5ed452640f6d.herokuapp.com/api/wallet/deposit/",
  //       {
  //         wallet_id: walletAddress,
  //         amount: dollarValue,
  //       }
  //     );

  //     // console.log("Amount: ", amount);
  //     // Cookies.set("balance", response.data.balance);

  //     if (response.status === 200) {
  //       setShowModal(true);
  //       setTimeout(() => {
  //         setShowModal(false);
  //         onClose();
  //         // navigate("/wallet");
  //       }, 2000);
  //     } else {
  //       alert("No response");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     // alert("An error occurred. Please try again.");
  //     throw new Error("API fetching failed...");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    // <div className="bg-[#0F011A] h-screen font-nunito text-slate-300 overflow-hidden flex items-center justify-center relative">
    <div
      className="flex justify-center w-full fixed top-0 left-0 px-3 backdrop-blur-xl z-[100] h-screen"
      data-aos="fade-in"
    >
      <div className="flex flex-col gap-10 my-20 bg-gradient-to-r from-[#210F34] to-[#170D25] p-8 sm:p-14 rounded-3xl max-w-xl z-50">
        <div className="flex justify-end">
          <i
            className="ri-close-fill text-3xl cursor-pointer hover:scale-105"
            onClick={onClose}
          ></i>
        </div>
        <div>
          <div className="flex justify-between p-2 px-5 ">
            <p>Deposit Amount</p>
          </div>
          <div className="flex justify-between gap-[2vw] sm:gap-5 border border-slate-600 rounded-2xl p-4 sm:p-14">
            <img src={dollar} className="w-10 sm:w-16"></img>
            <input
              placeholder="Enter amount in USDT"
              type="number"
              required
              value={dollarValue}
              onChange={(e) => setDollarValue(e.target.value)}
              className="bg-transparent text-xl sm:text-4xl font-light w-full text-center outline-none"
            ></input>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <button
            className={`p-2 px-14 sm:px-32 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer ${
              isLoading ? "cursor-not-allowed" : ""
            }`}
            onClick={handleDeposit}
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? "Depositing..." : "Deposit"}
          </button>
          {transactionStatus && (
            <span
              // color={transactionStatus === "success" ? "green" : "red"}
              // mt={2}
              className={`mt-2 ${
                transactionStatus == "success"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {transactionStatus === "success"
                ? "Transaction Successful!"
                : transactionStatus === "failed"
                ? "Transaction Failed."
                : "Transaction is Pending..."}
            </span>
          )}
          {isErrorModal && (
            <span className="text-red-500 text-[12px] mt-2">{errorText}</span>
          )}
        </div>
      </div>
      {showModal && <Modal message="Deposit Successful" />}
    </div>
    //   <div className="absolute right-0 top-[25rem]">
    //     <img src="/external/ellipse32356-aujk-700w.png" alt="ellipse" />
    //   </div>
    //   <div className="absolute left-[-30%] w-[80%] top-[5rem]">
    //     <img src={ellipse} alt="ellipse" />
    //   </div>

    //   {showModal && <Modal message="Deposit Successful" />}
    // </div>
  );
};

export default Deposit;
