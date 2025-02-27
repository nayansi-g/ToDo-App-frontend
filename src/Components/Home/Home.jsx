import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className='home d-flex justify-content-center align-items center'>
            <div className='container d-flex justify-content-center align-items-center flex-column'>
                <h1 className='text-center'>Organize your <br />work and life, finally.</h1>
                <p>
                    Become focused, organized, and calm with <br />
                    todo app. The world's #1 task manager app.
                </p>
                <button className='home-btn p-2 text-5xl'> <a className=' text-decoration-none font-5  text-white' href="/todo">Make Todo List</a> </button>
            </div>
        </div>
    )
}

export default Home;