import React, { useState , useEffect} from 'react'
import './Todo.css';
import TodoCard from './TodoCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';
import axios from 'axios';



const Todo = () => {
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("user-id");
    const show = () => {
        document.getElementById("textarea").style.display = "block";
    }
    const [Inputs, setInputs] = useState({ title: "", body: "" });
    const [Array, setArray] = useState([])
    const [selectedTask, setSelectedTask] = useState("");
    

    const [showUpdatePopup, setShowUdatePopup] = useState(false);


    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    }
    const submit = async () => {
        
        if (Inputs.title === "" || Inputs.body === "") {
            toast.error("Title or Body should not be empty")

            } else {
                
                if(token && id){
                    await axios.post("http://localhost:4000/v2/addTask",
                    {title:Inputs.title,body:Inputs.body, user:id}, {headers: {
                        "Content-Type" : "application/json",
                        "token" : token
                    }})
                    .then((res)=>{
                        console.log(res);
                        toast.success("Your Task Is Saved");
                        fetchData();
                    });
                    
                setInputs({ title: "", body: "" })
                
                   }else{
                    setArray([...Array, Inputs])
                setInputs({ title: "", body: "" })
                toast.success("Your Task Is Saved");
                toast.error("Your Task Is Not Saved !Please SignUp")
                   }
                
                
            
        }
    }


    const del = async (currId) => {
        if (!token || !id) {
          console.error("Missing token or task ID");
          return;
        }
      
        try {
          const response = await axios.delete(
            `http://localhost:4000/v2/deleteTask/${currId}`,
            {
              headers: {
                "Content-Type": "application/json",
                "token" : token,
                "userid" : id
              },
            }
          );
      
          console.log("Task deleted:", response.data);
          fetchData(); 
      
        } catch (error) {
          console.error("Error deleting task:", error.response?.data || error.message);
        }
      };
      

    const dis = (id) => {
        console.log(id, "Selected");
        setSelectedTask(id);
        setShowUdatePopup(true);
    }

    const hid = () => {
        setShowUdatePopup(false)
    }

    const fetchData =async()=>{
        await axios.get(`http://localhost:4000/v2/getTask`, {headers : {
            'Content-Type' : "application/json",
            "token" : token,
            "id" : id
        }}).then((response)=>{
            console.log("RESONSE",response)
            setArray(response.data.getAllList.list);
        }).catch(err=> console.log(err));
    }
    useEffect(()=>{
        
        fetchData();
    },[]);



    return (
        <>
            <div className='todo'>
                <ToastContainer />
                <div className='todo-main  d-flex justify-content-center align-items-center my-4 flex-column'>
                    <div className='d-flex flex-column todo-inputs-div w-50 p-1'>
                        <input type="text" onClick={show} onChange={change} value={Inputs.title} name='title' placeholder='TITLE' className='my-2 p-2 todo-inputs' />
                        <textarea id='textarea' onChange={change} value={Inputs.body} name='body' type="text" placeholder='BODY' className='p-2 todo-inputs' />
                    </div>
                    <div className='w-50 d-flex justify-content-end my-3 '>
                        <button className='home-btn px-2 py-1' onClick={submit}>Add</button>

                    </div>

                </div>
                <div className="todo-body">
                    <div className="container-fluid">
                        <div className="row">
                            {Array && Array.map((item, index) => <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                                <TodoCard title={item.title} body={item.body} id={item._id} delid={del} display={dis} />
                            </div>)}


                        </div>
                    </div>

                </div>
            </div>
            {showUpdatePopup && <div className="todo-update ">
                <div className="container update" id='todo-update'> <Update  task={selectedTask} fetchData={fetch} hide={hid} /></div>

            </div>}
        </>
    )
}



export default Todo;