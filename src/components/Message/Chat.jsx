import React from 'react'
import images from '../../constants/images';
import { AiOutlineSend } from 'react-icons/ai';
import { GrAttachment } from 'react-icons/gr';
import { BsImageFill } from 'react-icons/bs';
const Chat = () => {
  return (
    <div className='bg-[#232425] h-screen flex items-center justify-center'>
      <div className='rounded-lg w-[65%] h-[80%] grid grid-cols-12 border-[white] border-2'>
        <div className='col-span-4 border-r-2 border-white  bg-[#808080]'>
          <div className='flex items-center bg-[#4F4F4F] h-[50px] p-[10px] justify-between text-white'>
            <span className=''>Message</span>
            <div className='user flex items-center space-x-2'>
              <img src={images.user} className='h-10 w-10 rounded-full cursor-pointer'></img>
              <span>Kienne</span>
            </div>
          </div>
          <div className='search border-b-[1px] border-dashed border-b-white'>
            <div className='searchForm'>
              <input className='w-full border-b-[1px] border-b-white bg-transparent outline-none text-white placeholder:text-[white] p-2' type='text' placeholder='Find a user' />
            </div>
            <div className='userChat flex items-center space-x-2 gap-[10px] cursor-pointer text-white hover:bg-[#696969] p-2'>
              <img src={images.user} className='h-10 w-10 rounded-full object-cover '></img>
              <div className='userChatInfo'>
                <span className='text-[18px] font-medium'>Kienne</span>
              </div>
            </div>
          </div>
          <div className='user flex items-center space-x-2 p-[10px] cursor-pointer text-white hover:bg-[#696969] gap-[10px]'>
            <img src={images.user} className='h-10 w-10 rounded-full cursor-pointer'></img>
            <div>
              <span className='text-[18px] font-medium'>Kienne</span>
              <p className='text-[14px] text-[#D3D3D3]'>Hello</p>
            </div>
          </div>
          <div className='user flex items-center space-x-2 p-[10px] cursor-pointer text-white hover:bg-[#696969] gap-[10px]'>
            <img src={images.user} className='h-10 w-10 rounded-full cursor-pointer'></img>
            <div>
              <span className='text-[18px] font-medium'>Kienne</span>
              <p className='text-[14px] text-[#D3D3D3]'>Hello</p>
            </div>
          </div>
          <div className='user flex items-center space-x-2 p-[10px] cursor-pointer text-white hover:bg-[#696969] gap-[10px]'>
            <img src={images.user} className='h-10 w-10 rounded-full cursor-pointer'></img>
            <div>
              <span className='text-[18px] font-medium'>Kienne</span>
              <p className='text-[14px] text-[#D3D3D3]'>Hello</p>
            </div>
          </div>
        </div>
        <div className='col-span-8 overflow-scroll'>
          <div className='flex items-center bg-[#696969] h-[50px] p-[10px]  text-white'>
            <span className='text-[18px] font-medium'>Kienne</span>
          </div>
          <div className='p-[10px] bg-[#E8E8E8] h-[calc(100%-100px)] overflow-y-scroll'>
            <div className='flex gap-[20px] mb-[10px] flex-row-reverse'>
              <div className='flex flex-col text-[gray] font-light'>
                <img src={images.user} className='h-10 w-10 rounded-full cursor-pointer object-cover'></img>
                <span>just now</span>
              </div>
              <div className=' max-w-[80%] flex flex-col gap-[10px] items-end'>
                <p className='bg-[#8da4f1] px-[20px] py-[10px] rounded-lg max-w-max'>Hello</p>
                <img src={images.user} className='w-[50%] cursor-pointer'></img>
              </div>
            </div>
            <div className='flex gap-[20px] mb-[10px] flex-row-reverse'>
              <div className='flex flex-col text-[gray] font-light'>
                <img src={images.user} className='h-10 w-10 rounded-full cursor-pointer object-cover'></img>
                <span>just now</span>
              </div>
              <div className=' max-w-[80%] flex flex-col gap-[10px] items-end'>
                <p className='bg-[#8da4f1] px-[20px] py-[10px] rounded-lg max-w-max'>Hello</p>
                <img src={images.user} className='w-[50%] cursor-pointer'></img>
              </div>
            </div>
            <div className='flex gap-[20px] mb-[10px] flex-row-reverse'>
              <div className='flex flex-col text-[gray] font-light'>
                <img src={images.user} className='h-10 w-10 rounded-full cursor-pointer object-cover'></img>
                <span>just now</span>
              </div>
              <div className=' max-w-[80%] flex flex-col gap-[10px] items-end'>
                <p className='bg-[#8da4f1] px-[20px] py-[10px] rounded-lg max-w-max'>Hello</p>
                <img src={images.user} className='w-[50%] cursor-pointer'></img>
              </div>
            </div>
          </div>
          <div className='h-[50px] bg-white p-[10px] flex justify-between'>
            <input className='w-full border-none outline-none placeholder:text-[#D3D3D3]' placeholder='Type something...' />
            <div className='flex items-center p-3 space-x-3 text-[18px]'>
              <BsImageFill />
              <input type='file' className='hidden' id='file' />
              <label htmlFor='file'>
                <GrAttachment />
              </label>
              <div className='flex items-center space-x-1 bg-[#1E90FF] cursor-pointer text-white p-1'>
                <AiOutlineSend />
                <button className='border-none'>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat