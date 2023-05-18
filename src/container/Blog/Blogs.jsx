import React, { useState } from 'react'
import images from '../../constants/images'
import { AiFillLike, AiOutlineMessage, AiOutlineCamera, AiOutlineLogout, AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { GoComment } from 'react-icons/go'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
const Blogs = () => {
    const [isOpen, setisOpen] = useState(false);
    return (
        <div className='w-screen sm:w-full'>
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
                        <Link to='/createblog'>
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
            </div >
            <div className='px-36 pt-5'>
                <div>
                    <h2 className='font-bold text-[40px]'>Blogs</h2>
                    <p>This is all posts</p>
                </div>
                <div className='border border-solid rounded-lg border-black p-5 mt-16 mb-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <div className='w-12 h-12'>
                                <img src={images.user} className='rounded-full cursor-pointer ' />
                            </div>
                            <div className='ml-3'>
                                <p className='font-bold text-black hover:underline cursor-pointer'>Kienne</p>
                                <div className='flex items-center'>
                                    <p className='text-xs text-[#9b9ea3] mr-1'>3 hours ago &#8226;</p>
                                    <BiWorld className='text-[#9b9ea3] shrink-0' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-between'>
                        <div className='mt-2 mb-2'>
                            <Link to='/post'>
                                <h2 className='text-black font-bold text-[30px] text-justify'>I feel it's difficult to switch to a new language</h2>
                            </Link>
                            <p className='text-black text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
                        </div>
                        <img className='rounded-xl max-w-[300px] max-h-[200px] w-[50%] h-[50%]' src={images.user} />
                    </div>
                </div>
                <div className='border border-solid rounded-lg border-black p-5 mb-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <div className='w-12 h-12'>
                                <img src={images.user} className='rounded-full cursor-pointer ' />
                            </div>
                            <div className='ml-3'>
                                <p className='font-bold text-black hover:underline cursor-pointer'>Kienne</p>
                                <div className='flex items-center'>
                                    <p className='text-xs text-[#9b9ea3] mr-1'>3 hours ago &#8226;</p>
                                    <BiWorld className='text-[#9b9ea3] shrink-0' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-between'>
                        <div className='mt-2 mb-2'>
                            <Link to='/post'>
                                <h2 className='text-black font-bold text-[30px] text-justify'>I feel it's difficult to switch to a new language</h2>
                            </Link>                            <p className='text-black text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
                        </div>
                        <img className='rounded-xl max-w-[300px] max-h-[200px] w-[50%] h-[50%]' src={images.user} />
                    </div>
                </div>
                <div className='border border-solid rounded-lg border-black p-5 mb-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <div className='w-12 h-12'>
                                <img src={images.user} className='rounded-full cursor-pointer ' />
                            </div>
                            <div className='ml-3'>
                                <p className='font-bold text-black hover:underline cursor-pointer'>Kienne</p>
                                <div className='flex items-center'>
                                    <p className='text-xs text-[#9b9ea3] mr-1'>3 hours ago &#8226;</p>
                                    <BiWorld className='text-[#9b9ea3] shrink-0' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-between'>
                        <div className='mt-2 mb-2'>
                            <Link to='/post'>
                                <h2 className='text-black font-bold text-[30px] text-justify'>I feel it's difficult to switch to a new language</h2>
                            </Link>
                            <p className='text-black text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's...</p>
                        </div>
                        <img className='rounded-xl max-w-[300px] max-h-[200px] w-[50%] h-[50%]' src={images.user} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blogs