import React from 'react'
import { AiOutlineUsergroupDelete, AiFillExclamationCircle, AiOutlineShop, } from 'react-icons/ai';
import { MdOutlineHomeRepairService } from 'react-icons/md'
import images from '../../constants/images';
import { Link, Outlet } from 'react-router-dom';
import Report from '../../container/Report/Report';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Function = () => {
    return (
        <div className='w-[10rem] h-screen hidden sm:block bg-[#1c1e21]'>
            <div className='space-y-6 flex flex-col pt-4 pl-7'>
                <div className="w-full flex items-center mt-4 p-1 hover:bg-[#3a3b3c] hover:rounded-full">
                    <a className='w-full flex items-center cursor-pointer ' href='#kienne'>
                        <img src={images.user} alt='Profile Picture' className='h-10 w-10 rounded-full cursor-pointer' />
                        <p className='ml-2 font-bold text-white'>Kiennecacban</p>
                    </a>
                </div>
                <div className='cursor-pointer p-2 flex items-center hover:bg-[#3a3b3c] text-white hover:rounded-full '>
                    <AiOutlineUsergroupDelete className='h-10 w-10 text-[#0066CC]' />
                    <p className='ml-2 font-bold'>Group</p>
                </div>
                <Link to="/report">
                    <div className='cursor-pointer p-2 flex items-center text-semibold text-white hover:bg-[#3a3b3c] hover:rounded-full'>
                        <AiFillExclamationCircle className='h-10 w-10 text-[#CC0000]' />
                        <p className='ml-2 font-bold'>Report</p>
                    </div>
                </Link>
                <div className='cursor-pointer p-2 flex items-center text-semibold  text-white hover:bg-[#3a3b3c] hover:rounded-full'>
                    <AiOutlineShop className='h-10 w-10 text-[#0066CC]' />
                    <p className='ml-2 font-bold'>Rent</p>
                </div>
                <div className='cursor-pointer p-2 flex items-center text-semibold  text-white hover:bg-[#3a3b3c] hover:rounded-full'>
                    <MdOutlineHomeRepairService className='h-10 w-10 text-[#0066CC]' />
                    <p className='ml-2 font-bold'>Repair</p>
                </div>
            </div>
            <Routes>
                <Route path='report' element={<Report/>}/>
            </Routes>
        </div>
    )
}

export default Function