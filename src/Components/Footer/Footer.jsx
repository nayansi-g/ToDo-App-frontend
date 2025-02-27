import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="left">
                    <h2 className="text-lg font-semibold">To-Do App</h2>
                    <p className="text-sm">Stay Organized, Stay Productive!</p>
                </div>
               

                <div className="right">

                    <div className="footer-links">
                        <a href="/">Home</a>
                        <a href="about">About</a>
                        <a href="/todo">ToDo</a>
                    </div>

                    <div className="footer-social">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-github"></i></a>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; {new Date().getFullYear()} To-Do App. All rights reserved.
                </div>

            </div>
           
        </footer>
    );
};

export default Footer;
