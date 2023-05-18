import React, { useState } from 'react'
import images from '../../constants/images'
import { AiFillLike, AiOutlineMessage, AiOutlineCamera, AiOutlineLogout, AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { GoComment } from 'react-icons/go'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
const Post = () => {
    const [isOpen, setisOpen] = useState(false);
    return (
        <div>
            <div className='justify-between items-center flex w-full px-14 container mx-auto py-4 border-b border-solid border-b-gray-300'>
                <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start cursor-pointer ">
                    <Link to='/home'>
                        <button className='flex items-center justify-center space-x-3'>
                            <a className=''><img src={images.logo} alt="logo img" className=' w-10 h-10 rounded-lg' /></a>
                            <p className='font-bold'>BACK</p>
                        </button>
                    </Link>

                </div>
                <div className='relative items-center justify-between z-[9999] flex'>
                    <div className='flex space-x-5'>
                        <Link to='/blog'>
                            <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Create Blog</button>
                        </Link>
                        <div>
                            <button onClick={() => setisOpen((prev) => !prev)} className='space-x-2 duration-500 active:border-black flex items-center justify-between'><img src={images.user} alt='Profile Picture' className='h-10 w-10 rounded-full' />
                                {!isOpen ? (
                                    <AiOutlineCaretDown className='h-8' />
                                ) : (
                                    <AiOutlineCaretUp className='h-8' />
                                )}
                            </button>
                        </div>
                    </div>

                    {isOpen && <div className='w-[360px] right-1 mr-3 fixed bg-white border-2 border-black top-20  items-center justify-center flex flex-col rounded-lg p-2 active:z-50 '>
                        {
                            <div className='w-full space-y-2 flex flex-col'>
                                <Link to='/profile'>
                                    <button class=" w-full font-bold flex items-center p-2 text-[16px] cursor-pointer  hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"><img className='h-10 w-10 rounded-full mr-2' src={images.user} />Kien Nguyen</button>
                                </Link>
                                <Link>
                                    <a href="#" class=" w-full font-bold flex items-center p-2 text-[16px] cursor-pointer  hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"><AiOutlineLogout className='mr-2 h-10 w-10 text-[10px] bg-gray-300 rounded-full' />Log Out</a>
                                </Link>
                            </div>
                        }
                    </div>}
                </div>
            </div >            <div className='px-[400px] pb-5'>
                <div className='w-full bg-[#242526] rounded-[.5rem] px-5 py-4 mt-4' >
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
                    <div className='mt-2 mb-2'>
                        <h2 className='text-[#dee0e5] font-bold text-[25px] text-justify'>I feel it's difficult to switch to a new language</h2>
                    </div>
                    <div className='mt-2 mb-2'>
                        <p className='text-[#dee0e5] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                        </div>
                    </div>
                </div>
                <div className='w-full bg-[#242526] rounded-[.5rem] px-5 py-4 mt-4' >
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
                    <div className='mt-2 mb-2'>
                        <h2 className='text-[#dee0e5] font-bold text-[25px] text-justify'>I feel it's difficult to switch to a new language</h2>
                    </div>
                    <div className='mt-2 mb-2'>
                        <p className='text-[#dee0e5] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                        </div>
                    </div>
                </div>
                <div className='w-full bg-[#242526] rounded-[.5rem] px-5 py-4 mt-4' >
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
                    <div className='mt-2 mb-2'>
                        <h2 className='text-[#dee0e5] font-bold text-[25px] text-justify'>I feel it's difficult to switch to a new language</h2>
                    </div>
                    <div className='mt-2 mb-2'>
                        <p className='text-[#dee0e5] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Post