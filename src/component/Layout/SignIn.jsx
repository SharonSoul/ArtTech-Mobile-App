import React from 'react'
import { images } from '..'
import { Link } from 'react-router-dom'

function SignIn() {
    return (
        <div className='flex flex-col'>
            <img src={images.smiling} alt="" className='w-[80%] m-auto mt-4' />
            <div className='w-[90%] m-auto text-center'>
                <h1 className='font-bold text-2xl'>Get a Swift response <br />
                    <span className='text-amber-600'>A-S-A-P</span></h1>
                <p className='mt-4'>Our experts, are qualified, and capable to make
                    your needs sumptous.</p>
            </div>
            <Link to={'/signIn'} className="mt-[25%] bg-green-600 text-white font-semibold w-[80%] m-auto p-[10px] rounded-lg text-center">Sign In</Link>
        </div>
    )
}

export default SignIn