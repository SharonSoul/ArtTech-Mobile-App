import React from 'react'
import { Link } from 'react-router-dom'

function SignInForm() {
  return (
    <div className='p-[20px]'>
        <form action="" className='flex flex-col'>
            <h1 className='text-4xl font-extrabold my-3'>Welcome Back</h1>
            <p className='text-xl font-thin'>SIgn in to your account</p>
            <label htmlFor="" className='mt-2 text-xl'>
                Email
            </label>
            <input type="email" name="email" id="" className='bg-gray-300 h-[60px] mt-2 text-black p-2 text-xl rounded-md' placeholder='Your Email'/>
            <label htmlFor=""  className='mt-2 text-xl'>Password</label>
            <input type="password" name='password' className='bg-gray-300 h-[60px] mt-2 text-black p-2 text-xl rounded-md' placeholder='Your Password'/>
            <Link to={''} className=" text-green-600 font-extrabold mt-3 block">FORGOTTEN PASSWORD?</Link>
            <input type="button" value="Sign In" className='bg-purple-600 p-3 mt-4 rounded-md'/>
            <Link to="/home">Home</Link>
            <div className='font-medium p-3 text-base'>Don't Have an account? <Link className='text-green-600'>sign up</Link></div>
        </form>
        <div className='border-t-2 border-black mt-3 mb-5' ></div>
        <div className='flex flex-col gap-5'>
            <Link to={''} className="bg-green-600 text-white font-semibold w-[80%] m-auto p-[10px] rounded-lg text-center ">SIGN IN WITH GOOGLE</Link>
            <Link to={''} className="bg-green-600 text-white font-semibold w-[80%] m-auto p-[10px] rounded-lg text-center ">SIGN IN WITH APPLE</Link>
        </div>
    </div>
  )
}

export default SignInForm