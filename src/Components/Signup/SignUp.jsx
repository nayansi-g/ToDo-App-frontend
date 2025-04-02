
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const email = useRef("");
  const username = useRef("");
  const password = useRef("");

  const submitForm = async (e) => {
    e.preventDefault();

    let newUser = {
      email: email.current.value,
      userName: username.current.value,
      password: password.current.value,
    };

    try {
      await axios.post(
        "https://todobackendnayansi-12f8a87b8d26.herokuapp.com/v1/register",
        newUser,
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success("User Created!");
      navigate("/signin");
    } catch (err) {
      console.error(err.response?.data?.error);
      toast.error(err.response ? "User already exists!" : "Something went wrong");
    }

    e.target.reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <ToastContainer />
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2">
        {/* Left Side (Header) */}
        <div className="flex flex-col items-center justify-center text-black p-6  bg-gray-100 ">
          <h1 className="text-2xl font-semibold">Sign Up</h1>
          <h1 className="text-2xl font-semibold">Page</h1>
        </div>

        {/* Right Side (Form) */}
        <div className="flex flex-col bg-gray-100 justify-center p-6">
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
              type="text"
              placeholder="Enter Your Username"
              ref={username}
              required
            />

            <input
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 transition-all"
              type="password"
              placeholder="Enter Your Password"
              ref={password}
              required
            />
            <small className="ml-1 font-semibold">Already have an account <Link to='/signin'><big className="text-red-500 cursor-pointer">Login</big></Link></small>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white text-lg py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

