import React from 'react'
import { images } from '../..'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <div className='w-[90%] flex flex-col m-auto justify-center align-middle '>
                <h1 className='font-extrabold text-center mt-4 text-xl'>Home</h1>
                <div className='mt-4'>
                    <input type="search" className='bg-gray-300 p-3 rounded-2xl w-[100%]' placeholder='SEARCH ON ARTISAN' />
                </div>
                <div className='mt-5 bg-green-400 rounded-md p-[20px]'>
                    <h1 className='font-bold text-2xl'>Swift Response</h1>
                    <p className='mt-2 mb-5 text-base font-light'>Behind Police Barrack, Ojoku Road Offa</p>
                    <span className='bg-white p-2 rounded-lg'>10 min</span>
                </div>
                <div className='h-[150px] mt-7 flex bg-gray-500 justify-between rounded-lg'>
                    <div>
                        <h1 className='text-xl pl-1 font-bold text-center'>ELECTRICAN IS NEAR YOU</h1>
                        <p>
                            <span className='text-center block'>Discount 25%</span>
                            <button className='bg-white p-2 block m-auto mt-3 rounded-xl'>ORDER NOW</button>
                        </p>
                    </div>
                    <img src={images.elect} alt="Electrican at work" className='h-full rounded-r-lg' />
                </div>
            </div>
            <div>
                <h1 className='mt-2 ml-1 font-bold'>TOP OF THE WEEK</h1>
                <div className='flex gap-2 flex-row p-3 overflow-scroll'>
                    <div><img src={images.img2} alt="" className='w-[400px]'/></div>
                    <div><img src={images.img2} alt="" className='w-[400px]'/></div>
                    <div><img src={images.img3} alt=""  className='w-[400px]'/></div>
                </div>
            </div>
            <div className='flex  w-[100%] justify-evenly p-4 sticky bottom-0 left-0 bg-slate-700'>
                <Link to=" " className='bg-red-400 w-1/4'>a</Link>
                <Link to="" className='w-1/4 bg-blue-400'>b</Link>
                <Link to="">b</Link>
                <Link to="">b</Link>
            </div>
        </div>
    )
}

export default Dashboard