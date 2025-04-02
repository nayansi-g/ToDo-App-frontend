import React from "react";


const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
    <div class="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h2 class="text-2xl font-semibold text-gray-700 text-center mb-4">Contact Us</h2>
        <form class="space-y-4">
            <div>
                <label class="block text-gray-600 text-sm font-medium" for="name">Name</label>
                <input id="name" type="text" placeholder="Your Name" class="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" />
            </div>
            <div>
                <label class="block text-gray-600 text-sm font-medium" for="email">Email</label>
                <input id="email" type="email" placeholder="Your Email" class="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300" />
            </div>
            <div>
                <label class="block text-gray-600 text-sm font-medium" for="message">Message</label>
                <textarea id="message" rows="4" placeholder="Your Message" class="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"></textarea>
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Send Message</button>
        </form>
    </div>

    </div>
  );
};

export default Contact;
