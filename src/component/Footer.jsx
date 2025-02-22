import React from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-2">
        <div className="flex flex-col md:flex-row justify-between w-full md:items-center pl-16">
          <div className="mb-6 md:mb-0 md:w-1/3 ">
            <h2 className="text-xl font-semibold mb-2"></h2>MindMate
            <p className="text-sm">Email: mindmate@gmail.com</p>
            <p className="text-sm">Phone: +91 9784753290</p>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul>
              <li className="text-sm mb-1">
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-sm mb-1">
                <Link to="/reachout">Contact Us</Link>
              </li>
              <li className="text-sm mb-1">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex flex-col">
              <a href="#" className="text-sm hover:underline">
                Facebook
              </a>
              <a href="#" className="text-sm hover:underline">
                Twitter
              </a>
              <a href="#" className="text-sm hover:underline">
                Instagram
              </a>
            </div>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/4">
            <h2 className="text-lg font-semibold mb-2">Help & Support</h2>
            <ul>
              <li className="text-sm mb-1">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li className="text-sm mb-1">
                <a href="#" className="hover:underline">
                  Customer Support
                </a>
              </li>
              <li className="text-sm mb-1">
                <a href="#" className="hover:underline">
                  Community Forums
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-base">2025 MindHeal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
