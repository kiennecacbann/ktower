import React, { useState } from 'react';
import images from '../../constants/images';
const forPass = () => {
    return (
        <div className='grid gird-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img src={images.login_img2} alt="Login Image" className='w-full h-full object-cover' />
            </div>
            <div className='bg-gray-800 flex flex-col justify-center'>
                <form action="POST " className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl text-white font-bold text-center'>RESET PASSWORD</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Email</label>
                        <input placeholder='Please enter your email address' type="text" className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'></input>
                    </div>
                    <div className='flex justify-between text-gray-400 py-2'>
                        <p className=' flex items-center'>Are you remember?</p>
                        <a className='underline cursor-pointer' href='/login'>login now</a>
                    </div>
                    <button type='submit' className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>RESET</button>
                </form>
            </div>
        </div>
    )
}

export default forPass