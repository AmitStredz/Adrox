import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dollar from "./assets/dollarBlue.png";
import SuccessModal from "./sucessModal";
import Cookies from "js-cookie";

import Web3 from "web3";

const BSC_RPC_URL = "https://bsc-dataseed.binance.org/"; // BSC Mainnet URL
const PRIVATE_KEY =
  "d711ea3f921a916dcf7b2474d9575b196d09ed3c79edbeed7f6cb7240362a105"; // Replace with your private key
const SENDER_ADDRESS = "0xA5FDBBf8B12412B26c334D4e8231948aAc8AbD23"; // Replace with your sender address
const USDTContractAddress = "0x55d398326f99059fF775485246999027B3197955"; // BEP-20 USDT contract address

const USDTAbi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "_decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "_symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "burn",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" },
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "mint",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "sender", type: "address" },
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const Withdraw = ({ onClose, holdings }) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(""); // State for withdrawal amount
  // const [withdrawalAddress, setWithdrawalAddress] = useState(""); // State for withdrawal address
  const [isLoading, setIsLoading] = useState(false); // State to track loading status
  // const [balance, setBalance] = useState(0); // State for available balance
  const [showModal, setShowModal] = useState(false);

  const [receiverAddress, setReceiverAddress] = useState("");
  // const [amount, setAmount] = useState("");
  const [transactionHash, setTransactionHash] = useState("");
  const [transactionStatus, setTransactionStatus] = useState(null);
  const [errorText, setErrorText] = useState("");

  // useEffect(() => {
  //   const storedBalance = Cookies.get("balance");
  //   if (storedBalance) {
  //     setBalance(parseFloat(storedBalance)); // Ensure balance is a number
  //   }
  // }, []);

  const handleAmountValueChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setAmount(value);
    }
  };

  const handleButtonClick = async () => {
    console.log("Button clicked - attempting transaction...");

    try {
      setIsLoading(true);
      console.log("Sending USDT transaction...");
      await sendUsdtTransaction();
      console.log("USDT sent...");
      console.log("API fetching...");
      await handleWithdraw();
      console.log("withdraw successfull...");
    } catch (error) {
      console.error("Transaction error:", error.message);
      setErrorText(error.message || "An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const sendUsdtTransaction = async () => {
    if (!receiverAddress) throw new Error("Receiver address is required.");
    if (parseFloat(amount) <= 0) throw new Error("Enter a valid amount");

    const web3 = new Web3(new Web3.providers.HttpProvider(BSC_RPC_URL));
    const usdtContract = new web3.eth.Contract(USDTAbi, USDTContractAddress);
    const amountInWei = web3.utils.toWei(amount, "ether");

    console.log("Sending transaction with amount (in Wei):", amountInWei);

    try {
      const nonce = await web3.eth.getTransactionCount(SENDER_ADDRESS);
      console.log("Nonce fetched:", nonce);

      // Build the transaction
      const tx = usdtContract.methods
        .transfer(receiverAddress, amountInWei)
        .encodeABI();

      console.log("Transaction data encoded:", tx);

      const transactionObject = {
        to: USDTContractAddress,
        data: tx,
        gas: 200000,
        gasPrice: web3.utils.toWei("5", "gwei"),
        nonce: nonce,
        chainId: 56, // BSC Mainnet chain ID
      };

      console.log("Transaction object:", transactionObject);

      // Sign the transaction
      const signedTx = await web3.eth.accounts.signTransaction(
        transactionObject,
        PRIVATE_KEY
      );
      console.log("Transaction signed:", signedTx);

      // Send the transaction
      const receipt = await web3.eth.sendSignedTransaction(
        signedTx.rawTransaction
      );

      console.log(
        "Transaction sent, transaction hash:",
        receipt.transactionHash
      );
      setTransactionHash(receipt.transactionHash);
      setTransactionStatus("success");
    } catch (error) {
      console.error("Error during transaction:", error);

      if (error.receipt && error.receipt.status === false) {
        console.error("Transaction failed:", error.receipt);
        setTransactionStatus("failed");
      } else {
        throw new Error("Transaction failed. Please try again.");
      }
    }
  };

  //API fetch is withdraw successsfull...
  const handleWithdraw = async () => {
    setIsLoading(true);

    if (amount < 20) {
      alert("Minimum Withdrawal Amount: 20$");
      setIsLoading(false);
      return;
    }
    try {
      const walletId = Cookies.get("wallet_id");
      if (!walletId) {
        alert("wallet id not found.");
        return;
        throw new Error("Wallet ID not found for User.");
      }

      const response = await axios.post(
        "https://adrox-5ed452640f6d.herokuapp.com/api/wallet/withdraw/",
        {
          wallet_id: walletId,
          amount: amount,
        }
      );

      Cookies.set("balance", response.data.new_balance);

      if (response.data.message === "Withdrawal successful") {
        setShowModal(true);
        setTimeout(() => {
          // navigate("/wallet");
          onClose();
          setShowModal(false);
        }, 2000);
      } else if(response?.data?.error == "Insufficient balance"){
        alert("insufficient balance");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.message === "Wallet not found") {
        alert("Wallet not found");
        throw new Error("Wallet not found");
      } else if (error.message === "Insufficient balance") {
        alert("Insufficient balance");
        throw new Error("Insufficient balance");
      } else {
        alert("Some error occurred");
        throw new Error("unknown error occurred");
      }
      // alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // <div className="bg-[#0F011A] font-nunito text-slate-300 overflow-hidden flex items-center justify-center relative">
    <div
      className="flex justify-center w-full h-full fixed top-0 left-0 backdrop-blur-xl z-[100]"
      data-aos="fade-in"
    >
      <div className="w-full h-full px-3 flex items-center justify-center overflow-auto">
        <div className="flex flex-col gap-10 my-80 p-7 sm:p-14 rounded-3xl max-w-xl bg-gradient-to-r from-[#210F34] to-[#170D25] backdrop-blur-lg mt-[30rem]">
          <div className="flex justify-end">
            <i
              className="ri-close-fill text-3xl cursor-pointer hover:scale-105"
              onClick={onClose}
            ></i>
          </div>
          <div>
            <div className="flex justify-between p-2 px-5 ">
              <p>Withdrawal Amount</p>
              <p className="bg-slate-800 p-1 px-2 rounded-lg">
                Available Balance: {parseFloat(holdings).toFixed(3)} $
              </p>
            </div>
            <div className="flex justify-between gap-[2vw] sm:gap-5 border border-slate-600 rounded-2xl p-5 sm:p-14">
              <img src={dollar} alt="Dollar" className="w-10 sm:w-16" />
              <input
                placeholder="Minimum 20 $"
                type="text"
                required
                value={amount}
                onChange={(e) => handleAmountValueChange(e)}
                className="bg-transparent outline-none text-2xl sm:text-4xl font-light w-full text-center"
              ></input>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p>Receiver Address</p>
            <input
              placeholder="Enter receiver address"
              type="text"
              value={receiverAddress}
              onChange={(e) => setReceiverAddress(e.target.value)}
              className="p-2 px-3 rounded-xl bg-transparent border border-slate-600 w-full outline-none"
            ></input>
          </div>

          {/* <div className="flex flex-col gap-2">
            <p>Withdrawal Address</p>
            <input
              placeholder="Long press to paste"
              type="text"
              value={withdrawalAddress}
              onChange={(e) => setWithdrawalAddress(e.target.value)}
              className="p-2 px-3 rounded-xl bg-transparent border border-slate-600 w-full outline-none"
            ></input>
          </div> */}

          <div className="flex flex-col gap-3 font-200 bg-gradient-to-l from-[#21102E] to-[#2A163A] bg-opacity-70 p-10 px-5 rounded-xl">
            <div className="flex justify-between">
              <p>USD</p>
              <p>{amount}</p>
            </div>
            <div className="flex justify-between">
              <p>Withdrawal Transfer fees</p>
              <p>0.0005 USDT</p>
            </div>

            <div className="w-full h-[1px] bg-opacity-45 bg-white"></div>

            <div className="flex justify-between">
              <p>Total Withdrawal Amount</p>
              <p>{amount - -0.0005} USDT</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <button
              className={`p-2 px-14 sm:px-32 rounded-2xl bg-gradient-to-r from-[#4F0F81] to-[#A702FA] cursor-pointer ${
                isLoading ? "cursor-not-allowed" : ""
              }`}
              onClick={handleWithdraw}
              disabled={isLoading} // Disable button when loading
            >
              {isLoading ? "Withdrawing..." : "Withdraw"}
            </button>
            {transactionStatus && (
              <span
                className={`mt-2 ml-2 ${
                  transactionStatus === "success"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
                // color={transactionStatus === "success" ? "green" : "red"}
                // mt={2}
              >
                {transactionStatus === "success"
                  ? "Transaction Successful!"
                  : "Transaction Failed."}
              </span>
            )}
            {errorText && (
              <span className="text-red-500 text-[14px] mt-2 ml-2">
                {errorText}
              </span>
            )}
          </div>
        </div>
      </div>
      {showModal && <SuccessModal message="Withdrawal Successful" />}
    </div>

    //   <div className="absolute right-0 top-[25rem]">
    //     <img src="/external/ellipse32356-aujk-700w.png" alt="ellipse" />
    //   </div>
    //   <div className="absolute left-[-30%] w-[80%] top-[5rem]">
    //     <img src={ellipse} alt="ellipse" />
    //   </div>

    //   {showModal && <Modal message="Withdrawal Successful" />}
    // </div>
  );
};

export default Withdraw;
