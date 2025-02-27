// 



import React, { useState, useEffect } from 'react';
import './Todo.css';
import axios from 'axios';

const Update = ({ hide, task, fetchData }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        if (!task) return;

        const fetchTaskDetails = async () => {
            try {
                const response = await axios.get(`https://todobackendnayansi-12f8a87b8d26.herokuapp.com/v2/getTask/${task}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "token":localStorage.getItem("token") ,
                        "userid": localStorage.getItem("id") 
                    }
                });
                    console.log(response,"fetched responce")
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
            const response = await axios.put(`https://todobackendnayansi-12f8a87b8d26.herokuapp.com/v2/updateTask/${task}`, {
                title,
                body
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "token": localStorage.getItem("token"),
                    "userid": localStorage.getItem("id")
                }
            });
            console.log("function called")

            console.log("Task updated:", response.data);
            fetchData();
            hide(); // Close the update modal after successful update

        } catch (error) {
            console.error("Error updating task:", error.response?.data || error.message);
        }
    };

    return (
        <div className='p-5 d-flex justify-content-center align-items-start flex-column update'>
            <h3>Update your task</h3>
            <input 
                type="text"  
                className='todo-inputs my-4 w-100 p-3' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <textarea 
                className='todo-inputs w-100 p-3' 
                value={body} 
                onChange={(e) => setBody(e.target.value)}
            />
            <div className="btns">
                <button className='btn btn-dark my-4' onClick={handleUpdate}>Update</button>
                <button className='btn btn-danger mx-3 my-4' onClick={hide}>Close</button>
            </div>
        </div>
    );
};

export default Update;
