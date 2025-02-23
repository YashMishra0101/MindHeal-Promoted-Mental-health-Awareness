import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";
import { FaHeart, FaHandsHelping, FaRobot, FaVideo } from "react-icons/fa";
import imageOne from "../assets/support.jpeg";
import imageTwo from "../assets/positive.jpeg";
import imagethree from "../assets/imageOne.jpeg";
import imagefour from "../assets/staystrong.jpg";
import thumnail from "../assets/thumnail.png";
import Footer from "../component/Footer";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import MindMateVideo from '../assets/MindMate.mp4'; // Import the video file

const Home = () => {
  const [userName, setUserName] = useState("");
  const [displayText, setDisplayText] = useState("");
  const fullText = "Mindmate - Your Mental Health Companion ";
  const typingSpeed = 150; // Speed of typing effect in milliseconds
  const navigate = useNavigate();

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

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        index = 0; // Reset to start typing again
        setDisplayText("");
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  // Function to handle AI Chat Bot click
  const handleAIChatClick = () => {
    const user = auth.currentUser;
    if (user) {
      // If user is logged in, navigate to AI Chat Bot page
      navigate("/aibot");
    } else {
      // If user is not logged in, show a toast message
      toast.error("Please login to access the AI Chat Bot.", {
        duration: 3000,
        position: "top-center",
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-stone-50 to-stone-100 min-h-screen">
      <Toaster /> {/* Add Toaster for displaying toast messages */}
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {userName ? `Welcome, ${userName}!` : "Welcome to Mindmate"}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            <span className="typing-effect">{displayText}</span>
            <span className="cursor">|</span>
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/supportresources"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300"
            >
              Get Support
            </a>
            <button
              onClick={handleAIChatClick}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300"
            >
              AI Chat Bot
            </button>
          </div>
        </div>
      </div>
      {/* Features Section */}
      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* AI Chat Assistance */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-[0px_4px_15px_rgba(128,0,128,0.4)] transition-shadow duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 6px 20px rgba(75, 0, 130, 0.6)",
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center cursor-pointer select-none">
              <FaRobot className="text-5xl text-stone-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-purple-600 mb-4">
                AI Chat Assistance
              </h2>
              <p className="text-gray-700">
                We integrate Google Gemini for instant AI Chat Bot support,
                quick answers, and quick assistance.
              </p>
            </div>
          </motion.div>

          {/* Compassionate Support */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-[0px_4px_15px_rgba(128,0,128,0.4)] transition-shadow duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 6px 20px rgba(75, 0, 130, 0.6)",
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center cursor-pointer select-none">
              <FaHeart className="text-5xl text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-purple-600 mb-4">
                Compassionate Support
              </h2>
              <p className="text-gray-700">
                Our team is here to provide compassionate and understanding
                support whenever you need it.
              </p>
            </div>
          </motion.div>

          {/* Professional Guidance */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-[0px_4px_15px_rgba(128,0,128,0.4)] transition-shadow duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 6px 20px rgba(75, 0, 130, 0.6)",
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center cursor-pointer select-none">
              <FaHandsHelping className="text-5xl text-blue-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-purple-600 mb-4">
                Professional Guidance
              </h2>
              <p className="text-gray-700">
                Access professional guidance and resources to help you navigate
                through life's challenges.
              </p>
            </div>
          </motion.div>

          {/* Videos Help Section */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-[0px_4px_15px_rgba(128,0,128,0.4)] transition-shadow duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 6px 20px rgba(75, 0, 130, 0.6)",
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center cursor-pointer select-nones">
              <FaVideo className="text-5xl text-purple-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-purple-600 mb-4">
                Videos Help Section
              </h2>
              <p className="text-gray-700">
                Watch helpful videos on mental health, self-care, and coping
                strategies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* About Section */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 py-5 text-white cursor-pointer select-none">
        <h2 className="text-4xl font-bold text-center mb-8">
          Introduction Video of Mindmate{" "}
        </h2>
        {/* Video Section */}
        <div className="container mx-auto px-4 py-4 flex flex-col items-center -mt-12">
          <div className="p-8 rounded-lg text-center w-[80%] h-[50%]">
            <div className="aspect-w-16 aspect-h-9 border">
              <video
                className="w-full h-full rounded-lg"
                controls // Adds play, pause, volume controls
                poster={thumnail} // Add your thumbnail here
              >
                <source src={MindMateVideo } type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* About Minemate Section */}
        <div className="container mx-auto px-4 -mt-8 mb-5">
          <h2 className="text-3xl font-bold text-center "> About Mindmate </h2>
          <p className="text-xl text-center max-w-[55rem] mx-auto mt-3">
            Mindmate is a platform dedicated to suicide prevention and mental
            health awareness. We provide resources, support and a compassionate
            community to help you through life's challenges.
          </p>
        </div>
      </div>
      {/* Support Section */}
      <div className="container mx-auto px-4 py-16">
        {/* <h2 className="text-[2.8rem] font-bold text-center text-lime-500 mb-8 -mt-10">
    Your Mental Health Matters
  </h2> */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={imageOne}
              alt="Support"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-purple-600 mb-4">
              We're Here to Support You
            </h2>
            <p className="text-gray-700 mb-4">
              If you're feeling overwhelmed or need someone to talk to, know
              that we're here for you. Our team of dedicated professionals is
              ready to provide support and guidance whenever you need it.
            </p>
            <p className="text-gray-700">
              Don't hesitate to reach out to us. We believe in the power of
              connection and are committed to helping you navigate through
              life's challenges with compassion and understanding.
            </p>
          </div>
        </div>
      </div>
      {/* Stay Strong Section */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-4">Stay Strong</h2>
              <p className="text-lg mb-4">
                Life can throw unexpected challenges our way, but remember that
                within you lies the strength to overcome anything. Embrace your
                resilience and courage, and know that with each step, you're
                becoming stronger.
              </p>
              <p className="text-lg">
                Surround yourself with positivity, lean on your support system,
                and never lose sight of your goals. We're here to walk this
                journey with you, offering support and encouragement every step
                of the way.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={imagefour}
                alt="Stay Strong"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Be Positive Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={imageTwo}
              alt="Be Positive"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-purple-600 mb-4">
              Be Positive
            </h2>
            <p className="text-gray-700 mb-4">
              Life is a journey filled with twists and turns, challenges, and
              moments of joy. It's about embracing the ups and downs, navigating
              through uncertainties, and discovering the strength within
              ourselves.
            </p>
            <p className="text-gray-700">
              Every experience shapes us, molds us into who we are today.
              Sometimes, we may feel lost or overwhelmed, but it's important to
              remember that we're capable of overcoming anything that comes our
              way.
            </p>
          </div>
        </div>
      </div>
      {/* You're Never Alone Section */}
      <div className="bg-gradient-to-r from-blue-500 to-green-500 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-4">You're Never Alone</h2>
              <p className="text-lg mb-4">
                No matter what challenges you're facing, remember that you're
                not alone. We're here to support you every step of the way.
                Whether you need guidance, a listening ear, or just someone to
                talk to, our team is dedicated to providing a compassionate and
                understanding space for you.
              </p>
              <p className="text-lg">
                Don't hesitate to reach out whenever you need support. Your
                well-being is important to us, and we're committed to helping
                you navigate through any difficulties you may encounter.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={imagethree}
                alt="You're Never Alone"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
