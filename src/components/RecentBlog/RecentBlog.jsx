import React from 'react'
import images from '../../constants/images'

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
                        <span className='bg-[#ff5857] ml-[260px] mt-[276px] absolute rounded-t-lg p-3 text-white bold uppercase font-semibold text-[13px]'>20 may, 2023</span>
                    </div>
                    <div className='px-5 py-5'>
                        <a className='text-[20px] leading-7 font-bold text-black'>Did you hurt yourself when you fell from the heaven</a>
                        <p>By Admin</p>
                    </div>
                </div>
                <div className='max-w-[450px] max-h-[470px] cursor-pointer gird grid-cols-3'>
                    <div className='flex'>
                        <img src={images.user} className='w-full max-h-[320px] rounded-t-xl relative' />
                        <span className='bg-[#ff5857] ml-[260px] mt-[276px] absolute block rounded-t-lg p-3 text-white bold uppercase font-semibold text-[13px]'>20 may, 2023</span>
                    </div>
                    <div className='px-5 py-5'>
                        <a className='text-[20px] leading-7 font-bold text-black'>Did you hurt yourself when you fell from the heaven</a>
                        <p>By Admin</p>
                    </div>
                </div>
                <div className='max-w-[450px] max-h-[470px] cursor-pointer'>
                    <div className='flex'>
                        <img src={images.user} className='w-full max-h-[320px] rounded-t-xl relative' />
                        <span className='bg-[#ff5857] ml-[260px] mt-[276px] absolute rounded-t-lg p-3 text-white bold uppercase font-semibold text-[13px]'>20 may, 2023</span>
                    </div>
                    <div className='px-5 py-5'>
                        <a className='text-[20px] leading-7 font-bold text-black'>Did you hurt yourself when you fell from the heaven</a>
                        <p>By Admin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentBlog