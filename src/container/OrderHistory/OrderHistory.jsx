import React, { useState } from 'react'
import images from '../../constants/images'
import { AiOutlineMail, AiOutlineLogout, AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
const OrderHistory = () => {
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
            </div>
            <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">

                <div class="flex justify-start item-start space-y-2 flex-col">
                    <h1 class="text-3xl  lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #13432</h1>
                    <p class="text-base font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM</p>
                </div>
                <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                        <div class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                            <p class="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-white">Customer’s Cart</p>
                            <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                <div class="pb-4 md:pb-8 w-full md:w-40">
                                    <img class="w-full hidden md:block" src={images.sofa} alt="SOFA" />
                                </div>
                                <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                    <div class="w-full flex flex-col justify-start items-start space-y-8">
                                        <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">SOFA</h3>
                                        <div class="flex justify-start items-start flex-col space-y-2">
                                            <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Style: </span> Italic Minimal Design</p>
                                            <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Size: </span> Small</p>
                                            <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Color: </span> Light Blue</p>
                                        </div>
                                    </div>
                                    <div class="flex justify-between space-x-8 items-start w-full">
                                        <p class="text-base dark:text-white xl:text-lg leading-6">$36.00</p>
                                        <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">01</p>
                                        <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
                                <div class="w-full md:w-40">
                                    <img class="w-full hidden md:block" src={images.chair} alt="dress" />
                                </div>
                                <div class="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                                    <div class="w-full flex flex-col justify-start items-start space-y-8">
                                        <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">CHAIR</h3>
                                        <div class="flex justify-start items-start flex-col space-y-2">
                                            <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Style: </span> Italic Minimal Design</p>
                                            <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Size: </span> Small</p>
                                            <p class="text-sm dark:text-white leading-none text-gray-800"><span class="dark:text-gray-400 text-gray-300">Color: </span> Light Blue</p>
                                        </div>
                                    </div>
                                    <div class="flex justify-between space-x-8 items-start w-full">
                                        <p class="text-base dark:text-white xl:text-lg leading-6">$20.00</p>
                                        <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">01</p>
                                        <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">$20.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                            <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                                <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                                <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                    <div class="flex justify-between w-full">
                                        <p class="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                                        <p class="text-base dark:text-gray-300 leading-4 text-gray-600">$56.00</p>
                                    </div>
                                </div>
                                <div class="flex justify-between items-center w-full">
                                    <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                    <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">$56.00</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="bg-gray-300  w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                        <h3 class="text-xl font-semibold leading-5 text-black">Customer</h3>
                        <div class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                            <div class="flex flex-col justify-start items-start flex-shrink-0">
                                <div class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-400">
                                    <img src={"https://i.ibb.co/5TSg7f6/Rectangle-18.png"} alt="avatar" />
                                    <div class="flex justify-start items-start flex-col space-y-2">
                                        <p class="text-base  font-semibold leading-4 text-left text-gray-800">David Kent</p>
                                    </div>
                                </div>

                                <div class="flex justify-center text-gray-800 md:justify-start items-center space-x-4 py-4 border-b border-gray-400 w-full">
                                    <AiOutlineMail />
                                    <p class="cursor-pointer text-sm leading-5 ">david89@gmail.com</p>
                                </div>
                            </div>
                            <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                                <div class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                    <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                        <p class="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                                        <p class="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                                    </div>
                                </div>
                                <div class="flex w-full justify-center items-center md:justify-start md:items-start">
                                    <button class="mt-6 md:mt-0 dark:bg-transparent py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 border border-gray-800 w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Edit Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default OrderHistory