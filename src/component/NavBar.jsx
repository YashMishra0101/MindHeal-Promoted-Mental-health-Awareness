import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";
import { toast } from "react-hot-toast";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false);
        localStorage.removeItem("user");
        closeMenu();
        toast.success("Logout Successful");
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
        toast.error("Logout failed. Please try again.");
      });
  };

  const handleAIBotClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      toast.error("You Must Be Logged In To Access AI Bot.");
    }
  };

  return (
    <nav className="bg-purple-600 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center z-50">
        <span className="flex items-center space-x-2">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} className="h-8 rounded-sm" alt="SafeSpace Logo" />
          </Link>
          <Link to="/" onClick={closeMenu}>
            <div className="text-white font-bold text-xl">MindHeal</div>
          </Link>
        </span>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none z-50"
        >
          <svg
            className="w-6 h-6 z-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>

        {/* Dropdown Menu */}
        <ul
          ref={menuRef}
          className={`md:flex md:space-x-4 ${
            isOpen ? "block" : "hidden"
          } md:block absolute md:relative top-[3rem]  right-0 md:top-0 md:right-auto bg-purple-600 md:bg-transparent w-full md:w-auto text-left z-50 md:z-auto`}
        >
          <li className="border-t border-purple-400 md:border-0">
            <NavLink
              to="/"
              className="block px-4 py-2 text-white hover:underline"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="border-t border-purple-400 md:border-0">
            <NavLink
              to="/videoHelp"
              className="block px-4 py-2 text-white hover:underline"
              onClick={closeMenu}
            >
              Videos Help
            </NavLink>
          </li>
          <li className="border-t border-purple-400 md:border-0">
            <NavLink
              to="/supportresources"
              className="block px-4 py-2 text-white hover:underline"
              onClick={closeMenu}
            >
              Support Resources
            </NavLink>
          </li>
          <li className="border-t border-purple-400 md:border-0">
            <NavLink
              to="/emergencycontacts"
              className="block px-4 py-2 text-white hover:underline"
              onClick={closeMenu}
            >
              Emergency Contacts
            </NavLink>
          </li>
          <li className="border-t border-purple-400 md:border-0">
            <NavLink
              to="/reachout"
              className="block px-4 py-2 text-white hover:underline"
              onClick={closeMenu}
            >
              Reach Out
            </NavLink>
          </li>
          <li className="border-t border-purple-400 md:border-0">
            <NavLink
              to="/aibot"
              className="block px-4 py-2 text-white hover:underline"
              onClick={(e) => handleAIBotClick(e)}
            >
              AI Bot
            </NavLink>
          </li>
          <li className="border-t border-purple-400 md:border-0">
            <NavLink
              to="/about"
              className="block px-4 py-2 text-white hover:underline"
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          {!isLoggedIn && (
            <>
              <li className="border-t border-purple-400 md:border-0">
                <NavLink
                  to="/login"
                  className="block px-4 py-2 text-white hover:underline"
                  onClick={closeMenu}
                >
                  Login
                </NavLink>
              </li>
              <li className="border-t border-purple-400 md:border-0">
                <NavLink
                  to="/signup"
                  className="block px-4 py-2 text-white hover:underline"
                  onClick={closeMenu}
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
          {isLoggedIn && (
            <li className="border-t border-purple-400 md:border-0">
              <button
                onClick={logout}
                className="block px-4 py-2 text-white hover:underline"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
