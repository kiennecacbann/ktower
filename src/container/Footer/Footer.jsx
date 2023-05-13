import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import images from '../../constants/images';
import { MdWifiCalling3 } from 'react-icons/md'
const Footer = () => {
    return (

        <footer class="bg-[#1b182f] dark:bg-gray-900">
            <div class="mx-auto w-full px-14 py-7 ">
                <div className='flex justify-between items-center border-b border-gray-300 pb-10'>
                    <div className='flex flex-row items-center'>
                        <div className='text-[55px] text-[#0cc0df] pr-2'>
                            <AiOutlineMail />
                        </div>
                        <div className='flex-col flex'>
                            <span className='text-gray-400'>EMAIL ADDRESS</span>
                            <span className='text-white font-bold text-[18px] hover:text-[#0cc0df]'>kiennecacban@gmail.com</span>
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='text-[55px] text-red-600 pr-2'>
                            <img src={images.logo} className='h-14 w-14' />
                        </div>
                        <div className='flex-col flex'>
                            <span className='text-white'>K-TOWER</span>
                        </div>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='text-[55px] text-[#0cc0df] pr-2'>
                            <MdWifiCalling3 />
                        </div>
                        <div className='flex-col flex'>
                            <span className='text-gray-400'>CALL NOW</span>
                            <span className='text-white font-bold'>0388314851</span>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-8  lg:py-8 md:grid-cols-3">

                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class=" hover:underline">About</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Careers</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Twitter</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Facebook</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Privacy Policy</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Licensing</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div class="bg-[#25223c] dark:bg-gray-700 flex justify-center py-7">
                <p class="text-sm text-[#9390a7] leading-9 font-medium dark:text-gray-300 sm:text-center text-[16px]">© Copyright 2023 by K-TOWER</p>
            </div>
        </footer>
    )
}

export default Footer