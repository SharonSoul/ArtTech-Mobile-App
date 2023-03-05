import React from 'react'
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
    </div>
  )
}

export default Profile