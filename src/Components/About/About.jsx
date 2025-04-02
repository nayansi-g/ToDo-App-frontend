
import React from "react";
import image from "./toabout.jpeg"

const About = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 px-6 py-12">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={image}
                    alt="Task Management"
                    className="rounded-lg shadow-lg w-full max-w-md"
                />
            </div>

            {/* Right Side - Text */}
            <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pl-12">
                <h2 className="text-4xl font-bold text-gray-900">About Our Todo App</h2>
                <p className="text-lg text-gray-700 mt-4">
                    Our Todo App helps you stay organized and increase productivity.
                    Manage your tasks efficiently and never miss a deadline again.
                </p>
                <p className="text-lg text-gray-700 mt-2">
                    Whether you're a student, professional, or entrepreneur, our app
                    keeps your life in sync and tasks under control.
                </p>

                {/* Call to Action Button */}
                <a
                    href="/todo"
                    className="mt-6 inline-block bg-red-500 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-lg transition-all"
                >
                    Start Organizing Now
                </a>
            </div>
        </div>
    );
};

export default About;
