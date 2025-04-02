import React, { useState, useEffect } from "react";
import TodoCard from "./TodoCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";
import axios from "axios";

const Todo = () => {
  let token = localStorage.getItem("token");
  let id = localStorage.getItem("user-id");
  
  const [Inputs, setInputs] = useState({ title: "", body: "" });
  const [Array, setArray] = useState([]);
  const [selectedTask, setSelectedTask] = useState("");
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);

  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async () => {
    if (Inputs.title === "" || Inputs.body === "") {
      toast.error("Title or Body should not be empty");
    } else {
      if (token && id) {
        await axios
          .post(
            "https://todobackendnayansi-12f8a87b8d26.herokuapp.com/v2/addTask",
            { title: Inputs.title, body: Inputs.body, user: id },
            {
              headers: {
                "Content-Type": "application/json",
                token: token,
              },
            }
          )
          .then((res) => {
            toast.success("Your Task Is Saved");
            fetchData();
          });
        setInputs({ title: "", body: "" });
      } else {
        setArray([...Array, Inputs]);
        setInputs({ title: "", body: "" });
        toast.success("Your Task Is Saved");
        toast.error("Your Task Is Not Saved! Please Sign Up");
      }
    }
  };

  const del = async (currId) => {
    if (!token || !id) return;
    try {
      await axios.delete(
        `https://todobackendnayansi-12f8a87b8d26.herokuapp.com/v2/deleteTask/${currId}`,
        {
          headers: {
            "Content-Type": "application/json",
            token: token,
            userid: id,
          },
        }
      );
      fetchData();
    } catch (error) {
      console.error("Error deleting task:", error.response?.data || error.message);
    }
  };

  const dis = (id) => {
    setSelectedTask(id);
    setShowUpdatePopup(true);
  };

  const hid = () => {
    setShowUpdatePopup(false);
  };

  const fetchData = async () => {
    if (!token || !id) return;
    await axios
      .get("https://todobackendnayansi-12f8a87b8d26.herokuapp.com/v2/getTask", {
        headers: {
          "Content-Type": "application/json",
          token: token,
          id: id,
        },
      })
      .then((response) => {
        setArray(response.data.getAllList.list);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-gray-50 px-6 py-8">
        <ToastContainer />
        
        {/* Todo Input Section */}
        <div className=" flex flex-col gap-2 w-full items-center mt-10">
          <div className="w-full max-w-2xl mt-20 sm:mt-0 bg-white shadow-lg rounded-lg">
          <input
            type="text"
            onClick={show}
            onChange={change}
            value={Inputs.title}
            name="title"
            placeholder="TITLE"
            className="w-full p-3  rounded-lg my-1 outline-none"
          />
          <textarea
            id="textarea"
            onChange={change}
            value={Inputs.body}
            name="body"
            placeholder="BODY"
            className="w-full p-3  rounded-lg my-1  resize-none outline-none"
          />
          </div>
          <div className="w-full sm:w-1/2 flex justify-end flex-end ">
          <button
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-md transition-all"
            onClick={submit}
          >
            Add Task
          </button>
          </div>
        </div>

        {/* Todo List Section */}
        <div className="mt-8 w-full max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-500 text-center mb-4">Your Tasks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.map((item, index) => (
              <TodoCard key={index} title={item.title} body={item.body} id={item._id} delid={del} display={dis} />
            ))}
          </div>
        </div>
      </div>

      {/* Update Popup */}
      {showUpdatePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Update task={selectedTask} fetchData={fetchData} hide={hid} />
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;
