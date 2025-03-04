import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import { GrDocumentUpdate } from "react-icons/gr";

const TodoCard = ({ title, body, id, delid, display }) => {
    return (
        <div className='todo-card p-3'>
            <div>
                <h5>{title}</h5>
                <p className='todo-card-p'>
                    {body.split("", 42)}...
                </p>
            </div>

            <div className='d-flex justify-content-between '>
                <div className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1' onClick={() => { display(id) }}>
                    <GrDocumentUpdate className='card-icons' /> Update</div>


                <div className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger' onClick={() => { delid(id) }} >
                    <AiFillDelete className='card-icons del' />Delete</div>
            </div>
        </div>
    )
}

export default TodoCard