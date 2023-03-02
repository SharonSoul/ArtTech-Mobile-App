import React from 'react'
import { images } from '..'
import { Link } from 'react-router-dom'

function Display() {
    return (
        <div className='flex flex-col w-[95%] align-middle justify-center'>
            <img src={images.builder} alt="" className='mt-3 w-[80%] block m-auto' />
            <div className='w-[90%] m-auto text-center'>
                <h1 className='text-3xl font-bold text-center p-4'> All your Day-To-Day, Needs</h1>
                <p className='text-xs'>
                    You can order an expert,for your daily swift needs
                    in Offa and its Environ.
                </p>
                <div className='flex flex-col mt-8 gap-7'>
                    <Link to={''} className="bg-purple-600 text-black font-semibold w-[80%] m-auto p-[10px] rounded-lg"> Continue</Link>
                    <Link to={''} className="bg-green-600 text-white font-semibold w-[80%] m-auto p-[10px] rounded-lg">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Display