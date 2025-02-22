import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import { motion } from "framer-motion";
import Spinner from "../component/Spinner";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, fireDb } from "../firebase/FirebaseConfig";

const AiBot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async (userId) => {
      try {
        const userDoc = await getDoc(doc(fireDb, "users", userId));
        if (userDoc.exists()) {
          setUserName(userDoc.data().name);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserName(user.uid);
      } else {
        setUserName("");
      }
    });

    return () => unsubscribe();
  }, []);

  const API_KEY = import.meta.env.VITE_Geemini_API_KEY;
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const sendMessage = async () => {
    if (inputValue.trim() === "") return;
    try {
      setLoading(true);
      const prompt = inputValue;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      if (response?.text) {
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { role: "user", content: inputValue },
          { role: "bot", content: text },
        ]);
      } else {
        console.log("API NOT WORKING");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
    setInputValue("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-between min-h-screen bg-gradient-to-br from-teal-700  to-orange-700 relative overflow-hidden text-white"
    >
      <h1 className="text-3xl text-purple-600 font-extrabold mt-6 text-center w-[95%] mx-auto select-none">
        <motion.span whileHover={{ scale: 1.1 }} className="cursor-pointer">
          AI Assistance -
        </motion.span>
        <span className="text-base  text-green-600 ml-2 font-medium">
          {userName ? `${userName} I care for you ☺️.` : "I Care For You "}
        </span>
      </h1>
      {/* <h1 className="text-sm md:text-2xl font-bold text-purple-600 text-center mr-6">
          {userName ? `${userName}, we care for you.` : "We Care For You"}
        </h1> */}
      <div className="flex-grow p-4 overflow-y-auto">
        {chatHistory.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: message.role === "user" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`mb-4 ${
              message.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block px-4 py-2 rounded-lg shadow-md transition-all duration-300 ${
                message.role === "user"
                  ? "bg-purple-500 text-white hover:shadow-lg hover:bg-purple-600 cursor-pointer"
                  : "bg-purple-500 hover:shadow-lg text-white hover:bg-purple-600 cursor-pointer"
              }`}
            >
              <Markdown>{message.content}</Markdown>
            </div>
          </motion.div>
        ))}
        {loading && (
          <div className="min-h-screen flex justify-center items-center relative bottom-28">
            <Spinner />
          </div>
        )}
      </div>

      <motion.div
        className="p-4 flex items-center w-full pb-24 shadow-md "
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <input
          type="text"
          placeholder="Type your query..."
          className="flex-grow font-medium px-4 py-4 rounded-lg border-2 border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all bg-white text-purple-500"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />
        <motion.button
          className="ml-2 px-4 py-3 bg-purple-600 text-white rounded-lg focus:outline-none hover:bg-purple-700 transition-all"
          whileHover={{ scale: 1.1 }}
          onClick={sendMessage}
        >
          Send
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default AiBot;
