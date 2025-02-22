import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, fireDb } from "../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Footer from "../component/Footer";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    age: "",
    address: "",
    pinCode: "",
    userStory: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, gender, age, address, pinCode, userStory } = formData;

    if (password.length < 8) {
      return toast.error("Password must be at least 8 characters long");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userUID = userCredential.user.uid;

      await setDoc(doc(fireDb, "users", userUID), {
        name,
        email,
        gender,
        age,
        address,
        pinCode,
        userStory,
      });

      toast.success("Account Created Successfully");
      navigate("/");
    } catch (error) {
      toast.error("Signup Failed. Please Try Again.");
      console.error(`Signup failed: ${error.message}`);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center bg-gradient-to-r from-green-200 to-blue-400 min-h-screen pb-14 md:pb-0">
        <form onSubmit={handleSubmit} className="max-w-md md:w-full w-[90%] md:-mt-10 mt-10 px-6 py-5 border rounded-lg shadow-md md:mb-5 ">
          <h2 className="text-3xl font-bold mb-5 text-center text-white select-none">Create Your Account</h2>
          
          <div className="flex gap-4 mb-4 ">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-1/2 outline-none border focus:border-blue-600 rounded-lg py-2 px-3" required />
            <select name="gender" value={formData.gender} onChange={handleChange} className="w-1/2 outline-none border focus:border-blue-600 py-2 px-3 text-sm md:text-base rounded-lg " required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className="flex gap-4 mb-4 cursor-pointer">
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-1/2 rounded py-2 px-3 outline-none border focus:border-blue-600" required />
            <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" className="w-1/2 rounded py-2 px-3 outline-none border focus:border-blue-600" required />
          </div>
          
          <div className="flex gap-4 mb-4">
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-1/2 outline-none border focus:border-blue-600 rounded py-2 px-3" required />
            <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} placeholder="Pin Code" className="w-1/2 outline-none border focus:border-blue-600 rounded py-2 px-3" required />
          </div>
          
          {/* <textarea name="userStory" value={formData.userStory} onChange={handleChange} placeholder="Tell us about yourself..." className="w-full border rounded py-2 px-3 mb-4 h-24" required /> */}
          
          <div className="relative mb-4">
            <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="w-full outline-none border focus:border-blue-600 rounded py-2 px-3" required />
            <span className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          
          <div className="relative mb-4">
            <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="w-full outline-none border focus:border-blue-600 rounded py-2 px-3" required />
            <span className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          
          <button type="submit" 
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >Sign Up</button>
        </form>
      </div>
     <div className="md:-mt-14 ">
     <Footer />
     </div>
    </div>
  );
};

export default SignUp;
