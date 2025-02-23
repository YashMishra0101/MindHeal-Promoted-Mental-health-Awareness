import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { FaBars, FaTimes, FaCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";
import { toast } from "react-hot-toast";
import logo from "../assets/logo.jpeg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const closeMenu = () => {
    setIsMenuOpen(false);
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
      toast.error("Please log in to access AI Bot.");
    }
  };

  const handlVideoHelpClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      toast.error("Please log in to access Video Help.");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gradient-to-br from-green-500 to-stone-500 select-none">
      <nav className="relative px-6 py-4 flex justify-between items-center backdrop-blur-lg bg-white/10 border-b border-white/10">
        {/* Logo */}
        <Link
          className="flex items-center font-bold leading-none text-green-800 no-underline"
          to="#"
        >
          <img className=" rounded-lg w-10 pt-1" src={logo} alt="mindmatelogo" />
          <span className="bg-gradient-to-r from-green-300 ml-2 to-stone-100 text-2xl bg-clip-text text-transparent hover:from-stone-100 hover:to-green-400 transition-all duration-500 no-underline">
            MindMate
          </span>{" "}
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-white p-3 hover:text-blue-400 transition duration-300"
            onClick={toggleMenu}
          >
            <FaBars className="block h-6 w-6 fill-current" />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:items-center lg:space-x-5 text-nowrap w-[15rem] justify-center">
          <li>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-yellow-300 font-bold text-[0.9rem]"
                    : "text-white  text-sm font-semibold hover:text-yellow-300"
                } transition duration-300`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <BsThreeDotsVertical className="text-white text-xl" />
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-yellow-300 font-bold text-[0.9rem]"
                    : "text-white  text-sm font-semibold hover:text-yellow-300"
                } transition duration-300`
              }
              onClick={handlVideoHelpClick}
              to="/videoHelp"
            >
              Videos Help
            </NavLink>
          </li>
          <li>
            <BsThreeDotsVertical className="text-white text-xl" />
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-yellow-300 font-bold text-[0.9rem]"
                    : "text-white  text-sm font-semibold hover:text-yellow-300"
                } transition duration-300`
              }
              to="/aibot"
              onClick={handleAIBotClick}
            >
              AI Bot
            </NavLink>
          </li>
          <li>
            <BsThreeDotsVertical className="text-white text-xl" />
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-yellow-300 font-bold text-[0.9rem]"
                    : "text-white  text-sm font-semibold hover:text-yellow-300"
                } transition duration-300`
              }
              to="/supportresources"
            >
              Support Resources
            </NavLink>
          </li>
          <li>
            <BsThreeDotsVertical className="text-white text-xl" />
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-yellow-300 font-bold text-[0.9rem]"
                    : "text-white  text-sm font-semibold hover:text-yellow-300"
                } transition duration-300`
              }
              to="/emergencycontacts"
            >
              Emergency Contact
            </NavLink>
          </li>
          <li>
            <BsThreeDotsVertical className="text-white text-xl" />
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? "text-yellow-300 font-bold text-[0.9rem]"
                    : "text-white  text-sm font-semibold hover:text-yellow-300"
                } transition duration-300`
              }
              to="/reachout"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Login/Signup Buttons (Desktop) */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          {!isLoggedIn ? (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `px-6 py-2 text-sm font-semibold rounded-lg transition duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-white/20 text-white hover:bg-blue-600"
                  }`
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `px-6 py-2 text-sm font-semibold rounded-lg transition duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-white/20 text-white hover:bg-blue-600"
                  }`
                }
              >
                Sign Up
              </NavLink>
            </>
          ) : (
            <button
              onClick={logout}
              className="px-6 py-2 text-sm font-semibold rounded-lg  bg-white/20 text-white hover:bg-red-600  transition duration-300"
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`navbar-menu fixed inset-0 z-50 ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <div
          className="navbar-backdrop fixed inset-0 bg-black/50"
          onClick={toggleMenu}
        ></div>
        <nav className="fixed top-0 left-0 bottom-0 w-5/6 max-w-sm bg-gradient-to-br from-green-500 to-stone-500 border-r border-white/30 overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-4">
            <Link
              className="flex items-center font-bold leading-none text-green-800 no-underline"
              to="#"
            >
              <img className=" rounded-lg w-10 pt-1" src={logo} alt="mindmatelogo" />
              <span className="bg-gradient-to-r from-green-300 to-stone-100 text-2xl bg-clip-text text-transparent hover:from-stone-100 hover:to-green-400 transition-all duration-500 no-underline">
                MindMate
              </span>{" "}
            </Link>
            <button
              className="navbar-close p-2 hover:bg-white/10 rounded-lg transition duration-300"
              onClick={toggleMenu}
            >
              <FaTimes className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="px-6 py-1">
            <ul>
              {[
                { to: "/", text: "Home" },
                { to: "/videoHelp", text: "Videos Help" },
                { to: "/aibot", text: "AI Bot" },
                { to: "/supportresources", text: "Support Resources" },
                { to: "/emergencycontacts", text: "Emergency Contact" },
                { to: "/reachout", text: "Contact Us" },
              ].map((link, index) => (
                <li key={index} className="mb-2">
                  <NavLink
                    className={({ isActive }) =>
                      `block px-4 py-[0.60rem] text-sm font-semibold rounded-lg transition duration-300 ${
                        isActive
                          ? "text-yellow-300 font-bold text-[0.9rem]"
                          : "text-white  text-sm font-semibold hover:text-yellow-300"
                      }`
                    }
                    to={link.to}
                    onClick={toggleMenu}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-6 py-4 border-t border-white/10">
            {!isLoggedIn ? (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `block w-full px-4 py-3 mb-3 text-sm text-center font-semibold rounded-lg transition duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "bg-white/20 text-white hover:bg-blue-600"
                    }`
                  }
                  onClick={toggleMenu}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `block w-full px-4 py-3 mb-3 text-sm text-center font-semibold rounded-lg transition duration-300 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "bg-white/10 text-white hover:bg-blue-600"
                    }`
                  }
                  onClick={toggleMenu}
                >
                  Sign Up
                </NavLink>
              </>
            ) : (
              <button
                onClick={logout}
                className="block w-full px-4 py-3 mb-3 text-sm text-center font-semibold rounded-lg bg-white/20 text-white hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
