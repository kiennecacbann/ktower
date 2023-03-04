import React from 'react'
import images from '../../constants/images'
import { AiFillLike, AiOutlineMessage, AiOutlineCamera } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { GoComment } from 'react-icons/go'
const Post = () => {
    return (
        <div className='w-[590px] bg-[#242526] rounded-[.5rem] px-5 py-4 mt-4' >
            {/**Header */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <div className='w-12 h-12'>
                        <img src={images.user} className='rounded-full cursor-pointer ' />
                    </div>
                    <div className='ml-3'>
                        <p className='font-bold text-[#dee0e5] hover:underline cursor-pointer'>Kienne</p>
                        <div className='flex items-center'>
                            <p className='text-xs text-[#9b9ea3] mr-1'>3 hours ago &#8226;</p>
                            <BiWorld className='text-[#9b9ea3] shrink-0' />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <BsThreeDots className='w-10 h-10 text-[#9b9ea3] hover:bg-[#3a3b3c] hover:rounded-full p-2 cursor-pointer' />
                </div>
            </div>
            {/**Input */}
            <div className='mt-2 mb-2'>
                <p className='text-[#dee0e5]'>My brand new car</p>
            </div>
            {/**Image */}
            <div className='flex'>
                <div className='mx-5'>
                    <img src={images.user} className='' />
                </div>
            </div>
            {/**Like comment */}
            <div className='px-9 mt-2 flex items-center justify-between'>
                <div className='w-[1.1rem] h-[1.1rem] cursor-pointer flex items-center'>
                    <img src={images.like} className='mr-1' />
                    <span className='text-[#8e8d8d] hover:underline'>199</span>
                </div>
                <p className='text-[#8e8d8d] cursor-pointer hover:underline'>333 comments</p>
            </div>
            <div className='px-9'>
                <div className='flex justify-between border-y-[1px] border-[#8e8d8d] py-1 mt-5'>
                    <div className='flex px-6 py-1 items-center hover:bg-[#3a3b3c] hover:rounded-full cursor-pointer'>
                        <AiFillLike className='h-6 w-6 mr-2 text-[#8e8d8d]' />
                        <p className='text-[#8e8d8d] font-bold'>Like</p>
                    </div>
                    <div className='flex px-6 py-1 items-center hover:bg-[#3a3b3c] hover:rounded-full cursor-pointer'>
                        <GoComment className='h-6 w-6 mr-2 text-[#8e8d8d]' />
                        <p className='text-[#8e8d8d] font-bold'>Comment</p>
                    </div>
                    <div className='flex px-6 py-1 items-center hover:bg-[#3a3b3c] hover:rounded-full cursor-pointer'>
                        <AiOutlineMessage className='h-6 w-6 mr-2 text-[#8e8d8d]' />
                        <p className='text-[#8e8d8d] font-bold'>Send</p>
                    </div>
                </div>
            </div>
            {/**Comment Section */}
            <div className='max-h-40 overflow-y-scroll'>
                <div className='px-9 mt-2'>
                    <div className=''>
                        <p className='text-[#8e8d8d] hover:underline cursor-pointer'>View more comments</p>
                        <div className='flex items-center'>

                        </div>
                    </div>
                    <div className='flex items-center mt-3'>
                        <div className='w-10 h-10 mr-1'>
                            <img src={images.user} className='rounded-full' />
                        </div>
                        <div className='bg-[#3a3b3c] p-1 rounded-full'>
                            <p className='text-[#ded8dd] mx-2'>Kienne</p>
                            <p className='text-[#ded8dd] mx-2'>It's very nice bro!</p>
                        </div>
                    </div>
                </div>
                <div className='px-9 mt-2'>
                    <div className='flex items-center mt-3'>
                        <div className='w-10 h-10 mr-1'>
                            <img src={images.user} className='rounded-full' />
                        </div>
                        <div className='bg-[#3a3b3c] p-1 rounded-full'>
                            <p className='text-[#ded8dd] mx-2'>Kienne</p>
                            <p className='text-[#ded8dd] mx-2'>It's very nice bro!</p>
                        </div>
                    </div>
                </div>
                <div className='px-9 mt-2'>
                    <div className='flex items-center mt-3'>
                        <div className='w-10 h-10 mr-1'>
                            <img src={images.user} className='rounded-full' />
                        </div>
                        <div className='bg-[#3a3b3c] p-1 rounded-full'>
                            <p className='text-[#ded8dd] mx-2'>Kienne</p>
                            <p className='text-[#ded8dd] mx-2'>It's very nice bro!</p>
                        </div>
                    </div>
                </div>
                <div className='px-9 mt-2'>
                    <div className='flex items-center mt-3'>
                        <div className='w-10 h-10 mr-1'>
                            <img src={images.user} className='rounded-full' />
                        </div>
                        <div className='bg-[#3a3b3c] p-1 rounded-full'>
                            <p className='text-[#ded8dd] mx-2'>Kienne</p>
                            <p className='text-[#ded8dd] mx-2'>It's very nice bro!</p>
                        </div>
                    </div>
                </div>
                <div className='px-9 mt-2'>
                    <div className='flex items-center mt-3'>
                        <div className='w-10 h-10 mr-1'>
                            <img src={images.user} className='rounded-full' />
                        </div>
                        <div className='bg-[#3a3b3c] p-1 rounded-full'>
                            <p className='text-[#ded8dd] mx-2'>Kienne</p>
                            <p className='text-[#ded8dd] mx-2'>It's very nice bro!</p>
                        </div>
                    </div>
                </div>
                <div className='px-9 mt-2'>
                    <div className='flex items-center mt-3'>
                        <div className='w-10 h-10 mr-1'>
                            <img src={images.user} className='rounded-full' />
                        </div>
                        <div className='bg-[#3a3b3c] p-1 rounded-full'>
                            <p className='text-[#ded8dd] mx-2'>Kienne</p>
                            <p className='text-[#ded8dd] mx-2'>It's very nice bro!</p>
                        </div>
                    </div>
                </div>
                <div className='px-9 mt-2'>
                    <div className='flex items-center mt-3'>
                        <div className='w-10 h-10 mr-1'>
                            <img src={images.user} className='rounded-full' />
                        </div>
                        <div className='bg-[#3a3b3c] p-1 rounded-full'>
                            <p className='text-[#ded8dd] mx-2'>Kienne</p>
                            <p className='text-[#ded8dd] mx-2'>It's very nice bro!</p>
                        </div>
                    </div>
                </div>
            </div>
            {/**Input */}
            <div className='px-9 flex items-center mt-4 w-full'>
                <div className='h-10 w-10 mr-2 shrink-0'>
                    <img src={images.user} className='rounded-full' />
                </div>
                <div className='w-full rounded-full flex items-center bg-[#3a3b3c] pr-2'>
                    <input type='text' placeholder='Write a comment' className='text-white outline-0 bg-[#3a3b3c] p-2 pl-3 rounded-full w-full' />
                    <AiOutlineCamera className='w-7 h-7 text-white cursor-pointer hover:bg-[#666666] hover:rounded-full p-1' />
                </div>
            </div>

        </div>
    )
}

export default Post