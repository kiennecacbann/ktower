import React from 'react'
import images from '../../constants/images'
import { Link } from 'react-router-dom'
const RecentBlog = () => {
    return (
        <div className='pt-[80px]'>
            <div className='items-center justify-center flex flex-col'>
                <span className='text-[14px] font-semibold leading-5 tracking-wider uppercase font-[Poppins,sans-serif] text-[#ff5857]'>NEWS & UPDATES</span>
                <h2 className='text-[46px] font-extrabold'>RECENT BLOGS</h2>
            </div>
            <div className='flex flex-row px-14 justify-between space-x-5 pb-[100px] pt-10'>
                <div className='max-w-[450px] max-h-[470px] cursor-pointer'>
                    <div className='flex'>
                        <img src={images.user} className='w-full max-h-[320px] rounded-t-xl relative' />
                    </div>
                    <Link to='/post'>
                        <div className='pb-5 pt-2'>
                            <p>May 10, 2023</p>
                            <a className='text-[20px] leading-7 font-bold text-black'>Did you hurt yourself when you fell from the heaven</a>
                            <p>By Admin</p>
                        </div>
                    </Link>
                </div>
                <div className='max-w-[450px] max-h-[470px] cursor-pointer gird grid-cols-3'>
                    <div className='flex'>
                        <img src={images.user} className='w-full max-h-[320px] rounded-t-xl relative' />
                    </div>
                    <Link to='/post'>
                        <div className='pb-5 pt-2'>
                            <p>May 10, 2023</p>
                            <a className='text-[20px] leading-7 font-bold text-black'>Did you hurt yourself when you fell from the heaven</a>
                            <p>By Admin</p>
                        </div>
                    </Link>
                </div>
                <div className='max-w-[450px] max-h-[470px] cursor-pointer'>
                    <div className='flex'>
                        <img src={images.user} className='w-full max-h-[320px] rounded-t-xl relative' />
                    </div>
                    <Link to='/post'>
                        <div className='pb-5 pt-2'>
                            <p>May 10, 2023</p>
                            <a className='text-[20px] leading-7 font-bold text-black'>Did you hurt yourself when you fell from the heaven</a>
                            <p>By Admin</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RecentBlog