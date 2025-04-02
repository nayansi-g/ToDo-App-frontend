import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <h2 className="text-xl font-semibold">To-Do App</h2>
                    <p className="text-sm text-gray-400">Stay Organized, Stay Productive!</p>
                </div>

                <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-6 md:mb-0">
                    <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                        <a href="/" className="hover:text-gray-400">Home</a>
                        <a href="/about" className="hover:text-gray-400">About</a>
                        <a href="/todo" className="hover:text-gray-400">ToDo</a>
                        <a href="/contact" className="hover:text-gray-400">Contact</a>
                    </nav>
                </div>

                <div className="flex space-x-4">
                    <a href="https://facebook.com/" className="text-xl hover:text-gray-400">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/" className="text-xl hover:text-gray-400">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://github.com/" className="text-xl hover:text-gray-400">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-6">
                &copy; {new Date().getFullYear()} To-Do App. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
