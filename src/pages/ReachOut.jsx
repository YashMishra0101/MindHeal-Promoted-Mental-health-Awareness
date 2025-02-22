import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { fireDb } from "../firebase/FirebaseConfig"; // Ensure the path is correct
import Footer from "../component/Footer";
import toast, { Toaster } from "react-hot-toast";

const ReachOut = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(fireDb, "messages"), formData);
      toast.success(
        "Your message has been submitted successfully. We will contact you soon 😊",
        { duration: 3000 }
      );
      setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Something went wrong! Please try again. ❌");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-50 min-h-screen p-4">
      <Toaster />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-lime-500 mb-8 text-center">
          We're Here to Help You.
        </h1>
        <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] mx-auto">
          <h2 className="text-2xl font-semibold text-lime-500 mb-6 text-center">
            How Can We Help You?
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 ">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-200 focus:border-transparent transition-all"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-200 focus:border-transparent transition-all"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-200 focus:border-transparent transition-all"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-200 focus:border-transparent transition-all"
                rows="5"
                placeholder="How can we assist you?"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-zinc-800/20  text-white px-8 py-3 rounded-lg hover:bg-lime-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="mt-10 -mb-4 -mr-8 -ml-8">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ReachOut;