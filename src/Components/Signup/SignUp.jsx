import React, { useRef } from 'react';
import './SignUp.css';
import Headercomp from './Headercomp';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const history = useNavigate();


    const email = useRef("");
    const username = useRef("");
    const password = useRef("");

  

    const submitForm = async (e) => {
        e.preventDefault();

        let newUser = {
            email: email.current.value,
            userName: username.current.value,
            password: password.current.value
        }
        console.log(newUser)
        await axios.post("https://todobackendnayansi-12f8a87b8d26.herokuapp.com/v1/register", newUser, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {

            toast.success("User Created!")
            history('/signin')

        }).catch((err) => {
            console.log(err.response.data.error)
            if (err.response) {
                toast.error("User already exists!")
            } else {
                toast.error("Something went wrong")
            }
        })
        console.log(newUser)
        e.target.reset();
    }
    return (
        <div className='signup'>
            <ToastContainer />
            <div className='container'>
                <div className='row'>
                <div className='col-lg-4 column  col-left d-flex justify-content-center align-items-center'>
                        <Headercomp first="Sign" second="Up" />
                    </div>
                    <div className='col-lg-8 column d-flex justify-content-center align-items-center'>
                        <div className='d-flex flex-column w-100 p-5'>
                            <form className='d-flex flex-column w-100 ' onSubmit={submitForm}>
                                <input className='p-2 my-3 input-signup'
                                    type="email" name='email' ref={email}
                                    placeholder='Enter Your Email' />

                                <input className='p-2 my-3 input-signup'
                                    type="name" name='username'
                                    placeholder='Enter Your Username' ref={username} />

                                <input className='p-2 my-3 input-signup'
                                    type="password" name='password'
                                    placeholder='Enter Your Password' ref={password} />

                                <button type='submit' className='btn-signup p-2'>SignUp</button>
                            </form>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default SignUp