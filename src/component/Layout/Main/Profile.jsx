import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../..'

const Profile = () => {
  return (
    <div>
      <div className='flex justify-between align-middle items-center w-[90%] m-auto mt-6'>
        <h1 className='text-xl font-bold'>ADEOLAITAN DEV</h1>
        <img src={images.profilePic} alt="" />
      </div>
      <div className='flex gap-3 justify-between w-[90%] m-auto mt-10'>
        <div className='bg-orange-600 w-[100px] h-[100px] rounded-lg flex flex-col items-center justify-center gap-2'>
          <img src={images.msgIcon} alt="" className='w-[40px]'/>
          <h2>Messages</h2>
        </div>
        <div className='bg-orange-600 w-[100px] h-[100px] rounded-lg flex flex-col items-center justify-center gap-2'>
          <img src={images.loveIcon} alt="" className='w-[40px]'/>
          <h2>Favorite</h2>
        </div>
        <div className='bg-orange-600 w-[100px] h-[100px] rounded-lg flex flex-col items-center justify-center gap-2'>
          <img src={images.Question} alt="" className='w-[40px]'/>
          <h2>Help</h2>
        </div>
      </div>
      <div className=' w-[90%] m-auto flex justify-between mt-20 '>
        <h1 className='font-bold'>MY FAVORITE</h1>
        <Link to="" className='text-orange-400'>See More </Link>
      </div>
      <div className='mt-8 mb-10 w-[90%] m-auto flex justify-between'>
        <div className='bg-blue-700 w-[110px]  flex flex-col items-center h-[200px] justify-center align-middle gap-6'>
          <h1 className='text-xl text-center font-bold p-1'>PLUMBER</h1>
          <img src={images.elect} alt="" className='rounded-full w-[70%]'/>
        </div>
        <div className='bg-blue-700 w-[110px]  flex flex-col items-center h-[200px] justify-center align-middle gap-6'>
          <h1 className='text-xl text-center font-bold p-1'>PLUMBER</h1>
          <img src={images.elect} alt="" className='rounded-full w-[70%]'/>
        </div>
        <div className='bg-blue-700 w-[110px]  flex flex-col items-center h-[200px] justify-center align-middle gap-6'>
          <h1 className='text-xl text-center font-bold p-1'>PLUMBER</h1>
          <img src={images.elect} alt="" className='rounded-full w-[70%]'/>
        </div>
      </div>
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

export default Profile