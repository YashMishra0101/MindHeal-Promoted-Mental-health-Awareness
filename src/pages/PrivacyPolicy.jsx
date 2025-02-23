import React from "react";
import { FaShieldAlt, FaUserLock, FaInfoCircle } from "react-icons/fa";
import Footer from "../component/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-lime-200 min-h-screen p-4">
      <div className="container mx-auto px-4 py-8 ">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4 flex items-center justify-center">
            <FaShieldAlt className="mr-3" />
            Privacy Policy
          </h1>
          <p className="text-gray-700 text-lg">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-[98%] mx-auto">
          {/* Section 1: Introduction */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
              <FaInfoCircle className="mr-2" />
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to <strong>Minemate</strong>, a platform dedicated to suicide prevention and mental health awareness. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to safeguard it.
            </p>
          </div>

          {/* Section 2: Information We Collect */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
              <FaUserLock className="mr-2" />
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 pl-4">
              <li><strong>Personal Information:</strong> Name, gender, email address, postal address, and PIN code.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, such as pages visited and resources accessed.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and device information.</li>
            </ul>
          </div>

          {/* Section 3: How We Use Your Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
              <FaShieldAlt className="mr-2" />
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 pl-4">
              <li>To provide and improve our services.</li>
              <li>To personalize your experience on our website.</li>
              <li>To respond to your inquiries and provide support.</li>
              <li>To send you updates and resources related to mental health awareness.</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>
          </div>

          {/* Section 4: Data Security */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
              <FaShieldAlt className="mr-2" />
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We take the security of your data seriously. We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Section 5: Your Rights */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
              <FaUserLock className="mr-2" />
              Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 pl-4">
              <li><strong>Access:</strong> You can request a copy of the information we hold about you.</li>
              <li><strong>Correction:</strong> You can request corrections to any inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> You can request the deletion of your personal information.</li>
              <li><strong>Objection:</strong> You can object to the processing of your information for specific purposes.</li>
            </ul>
          </div>

          {/* Section 6: Contact Us */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4 flex items-center">
              <FaInfoCircle className="mr-2" />
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Email:</strong> support@minemate.com<br />
              <strong>Phone:</strong> +91-1234567890<br />
              <strong>Address:</strong> 123 Mental Health Lane, Wellness City, India - 123456
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 -mb-4 -mr-4 -ml-4">
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;