import React from 'react'
import { images } from '.'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='h-screen bg-black text-white flex justify-center align-middle'>
      <div className='flex flex-col align-middle justify-center items-center'>
      <img src={images.initalIcon} alt="logo"  />
      <Link to='/display' className='bg-blue-500 p-[10px] rounded-lg'>continue</Link>
      </div>
    </div>
  )
}

export default Home