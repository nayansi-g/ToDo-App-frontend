
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GiWhiteBook } from "react-icons/gi";
import { Link } from "react-router-dom";
import { authActr } from "../Store";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.clear("token");
    dispatch(authActr.logout());
  };

  return (
    <nav className="bg-white text-black px-6 py-3 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="  flex items-center justify-center leading-tight text-4xl flex items-center text-red-500  font-extrabold">
           <GiWhiteBook  /> Todo 
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl border-2 border-gray-200 p-1 rounded-md focus:outline-none"
        >
          ☰
        </button>

        {/* Menu Items */}
        <ul
          className={`absolute md:relative mt-2 bg-white md:bg-transparent left-0 top-16 md:top-0 w-full md:w-auto flex  md:flex-row gap-4 px-2 justify-center items-center md:items-center p-4 md:p-0 md:flex ${
            menuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li>
            <Link to="/" className="hover:text-red-600 hover:font-semibold">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-red-600 hover:font-semibold">About</Link>
          </li>
          <li>
            <Link to="/todo" className="hover:text-red-600 hover:font-semibold">Todo</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-red-600 hover:font-semibold">Contact</Link>
          </li>

          {isLoggedIn ? (
            <li>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full"
              >
                Log Out
              </button>
            </li>
          ) : (
            <>
              {/* <li>
                <Link
                  to="/signup"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                >
                  SignUp
                </Link>
              </li> */}
              <li>
                <Link
                  to="/signin"
                  className="bg-black text-white hover:bg-green-600 px-4 py-2 rounded-full"
                >
                  SignIn
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
