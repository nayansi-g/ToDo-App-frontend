
import React, { useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActr } from "../Store";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef("");
  const password = useRef("");

  const submitForm = async (e) => {
    e.preventDefault();

    let user = { email: email.current.value, password: password.current.value };

    try {
      const res = await axios.post(
        "https://todobackendnayansi-12f8a87b8d26.herokuapp.com/v1/signin",
        user,
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user-id", res.data.id);
      dispatch(authActr.login());

      navigate("/todo");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <ToastContainer />
       
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2">
        {/* Left Side (Header) */}
        <div className="flex flex-col items-center justify-center text-black p-6  bg-gray-100 ">
          <h1 className="text-2xl font-semibold">Sign In</h1>
          <h1 className="text-2xl font-semibold">Page</h1>
        </div>

        {/* Right Side (Form) */}
        <div className="flex flex-col justify-center bg-gray-100 p-6">
          <form className="space-y-3" onSubmit={submitForm}>
            <input
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 transition-all"
              type="email"
              placeholder="Enter Your Email"
              ref={email}
              required
            />

            <input
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 transition-all"
              type="password"
              placeholder="Enter Your Password"
              ref={password}
              required
            />
            <small className="ml-1 font-semibold">Don't have an account <Link to='/signup'><big className="text-red-500 cursor-pointer">Register</big></Link></small>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white text-lg py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
