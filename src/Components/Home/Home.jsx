// import React from 'react'
// import './Home.css'

// const Home = () => {
//     return (
//         <div className='home d-flex justify-content-center align-items center'>
//             <div className='container d-flex justify-content-center align-items-center flex-column'>
//                 <h1 className='text-center'>Organize your <br />work and life, finally.</h1>
//                 <p>
//                     Become focused, organized, and calm with <br />
//                     todo app. The world's #1 task manager app.
//                 </p>
//                  <button className='home-btn p-2 text-xl'> <a className=' text-decoration-none font-5  text-white' href="/todo">Make Todo List</a> </button>
//             </div>
//         </div>
//     )
// }

// export default Home;


import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Organize your <br /> work and life, finally.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4">
          Become focused, organized, and calm with <br />
          Todo App. The world's #1 task manager app.
        </p>
        <button className="mt-6 bg-red-500 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-lg">
          <a href="/todo" className="no-underline">Make Todo List</a>
        </button>
      </div>
    </div>
  );
};

export default Home;
