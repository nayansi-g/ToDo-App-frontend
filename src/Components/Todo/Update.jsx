
import React, { useState, useEffect } from "react";
import axios from "axios";

const Update = ({ hide, task, fetchData }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (!task) return;

    const fetchTaskDetails = async () => {
      try {
        const response = await axios.get(
          `https://todobackendnayansi-12f8a87b8d26.herokuapp.com/v2/getTask/${task}`,
          {
            headers: {
              "Content-Type": "application/json",
              token: localStorage.getItem("token"),
              userid: localStorage.getItem("id"),
            },
          }
        );

        setTitle(response.data.getSingleTask.title);
        setBody(response.data.getSingleTask.body);
      } catch (error) {
        console.error("Error fetching task details:", error.response?.data || error.message);
      }
    };

    fetchTaskDetails();
  }, [task]);

  const handleUpdate = async () => {
    if (!title || !body) {
      alert("Title and description cannot be empty.");
      return;
    }

    try {
      await axios.put(
        `https://todobackendnayansi-12f8a87b8d26.herokuapp.com/v2/updateTask/${task}`,
        { title, body },
        {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
            userid: localStorage.getItem("id"),
          },
        }
      );

      fetchData();
      hide(); // Close the modal
    } catch (error) {
      console.error("Error updating task:", error.response?.data || error.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center p-3 mt-24 justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg">
        <h3 className="text-xl font-semibold mb-4">Update your task</h3>
        
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
        />
        
        <textarea
          className="w-full p-3 border border-gray-300 resize-none rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter Description"
          rows="4"
        ></textarea>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3">
          <button
            className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={handleUpdate}
          >
            Update
          </button>
          
          <button
            className="w-full sm:w-auto bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            onClick={hide}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
