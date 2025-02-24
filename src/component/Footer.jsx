import React from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-2">
        <div className="flex flex-col md:flex-row justify-between w-full md:items-center pl-16">
          <div className="mb-6 md:mb-0 md:w-1/3 ">
            <h2 className="text-xl font-semibold mb-2"></h2>MindMate
            <p className="text-sm">Email: support@mindmate.com</p>
            <p className="text-sm">Phone: 91-1234567890</p>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul>
              <li className="text-sm mb-1 hover:underline">
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-sm mb-1 hover:underline">
                <Link to="/reachout">Contact Us</Link>
              </li>
              <li className="text-sm mb-1 hover:underline">
                <Link to="/privacypolicy"> Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex flex-col">
              <a className="hover:underline cursor-pointer"> Facebook</a>
              <a className="hover:underline cursor-pointer"> Twitter</a>
              <a className="hover:underline cursor-pointer">Instagram</a>
            </div>
          </div>
          <div className="mb-6 md:mb-0 md:w-1/4">
            <h2 className="text-lg font-semibold mb-2">Help & Support</h2>
            <ul>
              <li className="text-sm mb-1">
                <a className="hover:underline cursor-pointer">FAQ</a>
              </li>
              <li className="text-sm mb-1 hover:underline">
                <Link to="/reachout">Customer Support</Link>
              </li>
              <li className="text-sm mb-1">
                <a className="hover:underline cursor-pointer">
                  Community Forums
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-base">2025 Mindmate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
