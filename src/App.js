import React, { useEffect } from 'react'
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Components/Signup/SignIn'
import SignUp from './Components/Signup/SignUp';
import Todo from './Components/Todo/Todo';
import {useDispatch} from 'react-redux';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { authActr } from './Components/Store';


const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    const id = localStorage.getItem("token");
    if(id){
      dispatch(authActr.login());
    }

  },[])
   

  return (
    <>


      <BrowserRouter>
        < Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/footer' element={<Footer />} />

          <Route />
        </Routes>
      </BrowserRouter>
      <Footer />



    </>
  )
}

export default App;