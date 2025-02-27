import React from 'react'
import './SignUp.css'
import './SignUp'

const Headercomp = ({ first, second }) => {
    return (
        <div className='header-comp'>
            <h1 className='text-center sign-up-heading'>{first} <br />{second}</h1>
        </div>
    )
}

export default Headercomp