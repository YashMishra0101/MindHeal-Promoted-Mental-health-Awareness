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
        "Your message has been submitted successfully. We will contact you soon. 😊👍",
        { duration: 3000 }
      );
      setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("Something went wrong! Please try again. ❌");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Toaster />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-8 text-center">
          We are with you ☺️
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            How can we help you?
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="mt-10 -mb-4">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
