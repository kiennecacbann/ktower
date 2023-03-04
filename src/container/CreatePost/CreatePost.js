import React from 'react'
import images from '../../constants/images'
import { AiFillExclamationCircle, AiFillFileImage } from 'react-icons/ai'
import { MdOutlineHomeRepairService } from 'react-icons/md'
const CreatePost = () => {
    return (
        <div className='w-screen sm:w-full'>
            <div className=' w-[590px] my-4 bg-[#242526] max-w-[25rem] sm:max-w-[40rem] rounded-[.5rem] '>
                <div className='mt-8 flex items-center w-full p-3 pt-4'>
                    <div className='w-14 h-14 shrink-0 flex'>
                        <img src={images.user} className='rounded-full' />
                    </div>
                    <div className='flex items-center mx-3 w-full'>
                        <input type="text" placeholder="What's on your mind Kien?"
                            className='text-white outline-0 bg-[#3a3b3c] p-2 pl-3 rounded-full w-full h-12 hover:bg-[#444444]'>
                        </input>
                    </div>
                    <div className='flex items-center bg-blue-500 px-3 rounded-full h-10'>
                        <button className='font-bold text-white'>Post</button>
                    </div>
                </div>
                <div className='border-b-[1px] border-solid my-2 mt-2 mx-2 opacity-10'>

                </div>
                <div className='items-center px-3 sm:mx-9 py-1'>

                    <div className='flex items-center justify-center px-6 py-1 hover:bg-[#3a3b3c] hover:rounded-full cursor-pointer'>
                        <div className='w-7 h-9'>
                            <AiFillFileImage className='w-8 h-8 text-[#3366CC]' />
                        </div>
                        <p className='pl-1 text-[14px] ml-2 font-bold text-[#a5a8ac]'>Photo/video</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreatePost