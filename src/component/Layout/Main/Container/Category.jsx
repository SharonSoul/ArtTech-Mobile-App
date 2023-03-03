import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../..'
import SearchInput from './SearchInput'

const Category = () => {
    return (
        <div>
            <div className='w-[90%] block m-auto mt-2'>
                <h1 className='font-bold text-xl text-center'>Main</h1>
                <p>OUR SPECIALITY</p>
                <h1 className='font-bold text-xl text-green-600'>SPECIAL FOR YOU</h1>
                <SearchInput />
            </div>
            <div className='mt-5 mx-auto flex flex-col justify-center max-w-[90%]'>
                <div className='flex flex-row gap-4 overflow-y-auto no-scrollbar  '>
                    <Link to="" className='text-xl  font-medium  w-[100px] '>All</Link>
                    <Link to="" className='text-xl font-bold  '>FEATURED</Link>
                    <Link to="" className='font-medium text-xl  min-w-max'>TOP OF THE WEEK</Link>
                    <Link to="" className='text-xl font-medium '>HOME</Link>
                    <Link to="" className='text-xl font-medium '>BODY</Link>
                </div>
            </div>
            <div className='w-[90%] grid grid-cols-2 gap-2 m-auto mt-8'>
                <div className=''>
                    <img src={images.img3} alt="" />
                    <span>BUILDER</span>
                </div>
                <div className=''>
                    <img src={images.img1} alt="" />
                    <span>BUILDER</span>
                </div>
                <div className=''>
                    <img src={images.img2} alt="" />
                    <span>BUILDER</span>
                </div>
                <div className=''>
                    <img src={images.img3} alt="" />
                    <span>BUILDER</span>
                </div>
                <div className=''>
                    <img src={images.img3} alt="" />
                    <span>BUILDER</span>
                </div>
                <div className=''>
                    <img src={images.img1} alt="" />
                    <span>BUILDER</span>
                </div>
                <div className=''>
                    <img src={images.img2} alt="" />
                    <span>BUILDER</span>
                </div>
                <div className=''>
                    <img src={images.img3} alt="" />
                    <span>BUILDER</span>
                </div>
            </div>
            <div className='h-24'></div>
            <div className='flex  w-[100%] justify-between p-4 bg-white fixed bottom-0 '>
                <Link to=" " className=' '>
                    <img src={images.home} alt="" />
                </Link>
                <Link to="/category" className=''>
                    <img src={images.category} alt="" />
                </Link>
                <Link to="">
                    <img src={images.star} alt="" />
                </Link>
                <Link to="">
                    <img src={images.profile} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Category