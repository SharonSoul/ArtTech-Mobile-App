import React from 'react'
import { images } from '../..'
import { Link } from 'react-router-dom'
import SearchInput from './Container/SearchInput'

const Dashboard = () => {
    return (
        <div>
            <div className='w-[90%] flex flex-col m-auto justify-center align-middle '>
                <h1 className='font-extrabold text-center mt-4 text-xl'>Home</h1>
                <SearchInput/>
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
            <div className='mb-30 mx-auto flex flex-col justify-center max-w-[90%]'>
                <h1 className='mt-2 ml-1 font-bold'>TOP OF THE WEEK</h1>
                <div className='flex flex-row gap-4 overflow-y-auto no-scrollbar'>
                   <img src={images.img2} alt="" className='w-[400px]'/>
                    <img src={images.img2} alt="" className='w-[400px]'/>
                    <img src={images.img3} alt=""  className='w-[400px]'/>
                    <img src={images.img3} alt=""  className='w-[400px]'/>
                </div>
            </div>
            <div className='h-24'></div>
            <div className='flex  w-[100%] justify-between p-4 bg-white fixed bottom-0 '>
                <Link to="/home" className=' '>
                    <img src={images.home} alt="" />
                </Link>
                <Link to="/category" className=''>
                    <img src={images.category} alt="" />
                </Link>
                <Link to="">
                    <img src={images.star} alt="" />
                </Link>
                <Link to="/profile">
                    <img src={images.profile} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Dashboard