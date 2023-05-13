import React, { useState } from 'react'
import images from '../../constants/images'
import { AiOutlineSearch, AiFillCaretDown, AiOutlineShoppingCart, AiOutlineHistory, AiFillHome, AiOutlineThunderbolt } from 'react-icons/ai'
import { Select } from 'antd'
import { Link } from 'react-router-dom'
const RentProducts = () => {
    const [openHistory, setopenHistory] = useState(false);

    return (
        <div className='bg-white'>
            <div className='flex justify-between items-center px-[100px]'>
                <div className=" mt-10 w-full flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start cursor-pointer ">
                    <a className=''><img src={images.logo} alt="logo img" className=' w-14 h-14 rounded-full' /></a>
                </div>
                <div className='flex'>
                    <input placeholder='Search...' className='w-[500px] h-12 p-2 bg-[#d5d1ce] placeholder:text-black relative rounded border-none outline-none' />
                    <AiOutlineSearch className='mt-4 absolute ml-[470px] ' />
                </div>
                <div className='flex text-3xl space-x-3 hover:cursor-pointer'>
                    <Link to='/cart'>
                        <AiOutlineShoppingCart className='hover:bg-[#888888] hover:rounded-full' />
                    </Link>
                    <div className='relative items-center justify-between block active:z-[9999]'>
                        <button onClick={() => setopenHistory((prev) => !prev)} className='text-[30px] flex relative'>
                            <AiOutlineHistory className='' />
                        </button>
                        {openHistory && <div className='w-[360px] fixed bg-white right-1 mr-3 mt-2 pt-2 flex-col items-center rounded-lg border-solid border-2 border-gray-500'>
                            {
                                <div className='py-3 px-2 max-h-[630px] overflow-y-scroll'>
                                    <span className='font-bold text-[22px] pb-3'>Histories</span>
                                    <div className='justify-center items-center flex flex-col '>
                                        <a href="#" class=" w-full p-3 cursor-pointer block hover:bg-gray-200 dark:hover:bg-gray-100 dark:hover:text-white">
                                            <div className='flex items-center justify-center space-x-1'>
                                                <a href='/orderhistory' className='font-bold text-[20px]'> Order #13432</a>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            }
                        </div>}
                    </div>
                </div>
            </div>
            <div className='mt-10 '>
                <div className='justify-center flex px-[100px] pb-10'>
                    <img src={images.interior1} className='h-[500px] w-[100%] rounded-[50px]' />
                </div>
            </div>
            <div className='px-[100px] flex'>
                <div className='sm:block flex flex-col max-w-[200px] '>
                    <div className='bg-[#d5d1ce] p-3 w-[200px] rounded-lg mb-5 font-bold italic cursor-pointer hover:bg-[#FFCCFF] '>
                        <span className='flex items-center justify-between'>HOME <AiFillHome /></span>
                    </div>
                    <div className='bg-[#d5d1ce] py-5 px-3 w-[200px] rounded-lg font-bold italic cursor-pointer hover:bg-[#FFCCFF]'>
                        <span className='flex items-center justify-between'>NEW IN <AiOutlineThunderbolt /></span>
                    </div>
                    <div className='bg-[#d5d1ce] px-3 w-[200px] rounded-lg mt-5 font-bold italic cursor-pointer hover:bg-[#FFCCFF]'>
                        <span className='flex items-center justify-between'>TABLES
                            <img src={images.table} className='h-16 w-16' />
                        </span>
                    </div>
                    <div className='bg-[#d5d1ce] px-3 w-[200px] rounded-lg mt-5 font-bold italic cursor-pointer hover:bg-[#FFCCFF]'>
                        <span className='flex items-center justify-between'>CHAIRS
                            <img src={images.chair} className='h-16 w-16' />
                        </span>
                    </div>
                    <div className='bg-[#d5d1ce] px-3 w-[200px] rounded-lg mt-5 font-bold italic cursor-pointer hover:bg-[#FFCCFF]'>
                        <span className='flex items-center justify-between'>SOFAS
                            <img src={images.sofa} className='h-16 w-16' />
                        </span>
                    </div>
                    <div className='bg-[#d5d1ce] px-3 w-[200px] rounded-lg mt-5 font-bold italic cursor-pointer hover:bg-[#FFCCFF]'>
                        <span className='flex items-center justify-between'>HOUSEWARES
                            <img src={images.houseware} className='h-16 w-16' />
                        </span>
                    </div>
                </div>
                <div className='pl-20 pt-0'>
                    <div className='mb-5'>
                        <h2 className='items-center text-[36px] text-white font-bold italic '>SOFAS</h2>
                    </div>
                    <div className='text-black h-5 w-16 mb-10  '>
                        <select className='cursor-pointer flex justify-between items-center p-1 border-2 border-[black] rounded-lg outline-none font-bold'>Sort<AiFillCaretDown />
                            <option>Featured</option>
                            <option>Sort by Name</option>
                            <option>Sort by Price: Low to High</option>
                            <option>Sort by Price: High to Low</option>
                        </select>
                    </div>
                    <div className=' '>
                        <div className='relative flex flex-wrap justify-between text-black font-bold'>
                            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
                                <img src={images.sofa} className='h-[300px] rounded-3xl' />
                                <div className='flex justify-between pt-1'>
                                    <p className=''>SOFA</p>
                                    <span className=''>5$</span>
                                </div>
                                <div className='justify-between flex px-1 text-[15px] mt-5'>
                                    <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 justify-center flex "><AiOutlineShoppingCart className='text-[26px]' /></button>
                                    <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">RENT</button>
                                </div>
                            </div>
                            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
                                <img src={images.sofa} className='h-[300px] rounded-3xl' />
                                <div className='flex justify-between pt-1'>
                                    <p className=''>SOFA</p>
                                    <span className=''>5$</span>
                                </div>
                                <div className='justify-between flex px-1 text-[15px] mt-5'>
                                    <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 justify-center flex "><AiOutlineShoppingCart className='text-[26px]' /></button>
                                    <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">RENT</button>
                                </div>
                            </div>
                            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
                                <img src={images.sofa} className='h-[300px] rounded-3xl' />
                                <div className='flex justify-between pt-1'>
                                    <p className=''>SOFA</p>
                                    <span className=''>5$</span>
                                </div>
                                <div className='justify-between flex px-1 text-[15px] mt-5'>
                                    <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 justify-center flex "><AiOutlineShoppingCart className='text-[26px]' /></button>
                                    <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">RENT</button>
                                </div>
                            </div>
                            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
                                <img src={images.sofa} className='h-[300px] rounded-3xl' />
                                <div className='flex justify-between pt-1'>
                                    <p className=''>SOFA</p>
                                    <span className=''>5$</span>
                                </div>
                                <div className='justify-between flex px-1 text-[15px] mt-5'>
                                    <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 justify-center flex "><AiOutlineShoppingCart className='text-[26px]' /></button>
                                    <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">RENT</button>
                                </div>
                            </div>
                            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
                                <img src={images.sofa} className='h-[300px] rounded-3xl' />
                                <div className='flex justify-between pt-1'>
                                    <p className=''>SOFA</p>
                                    <span className=''>5$</span>
                                </div>
                                <div className='justify-between flex px-1 text-[15px] mt-5'>
                                    <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 justify-center flex "><AiOutlineShoppingCart className='text-[26px]' /></button>
                                    <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">RENT</button>
                                </div>
                            </div>
                            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
                                <img src={images.sofa} className='h-[300px] rounded-3xl' />
                                <div className='flex justify-between pt-1'>
                                    <p className=''>SOFA</p>
                                    <span className=''>5$</span>
                                </div>
                                <div className='justify-between flex px-1 text-[15px] mt-5'>
                                    <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 justify-center flex "><AiOutlineShoppingCart className='text-[26px]' /></button>
                                    <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">RENT</button>
                                </div>
                            </div>
                            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
                                <img src={images.sofa} className='h-[300px] rounded-3xl' />
                                <div className='flex justify-between pt-1'>
                                    <p className=''>SOFA</p>
                                    <span className=''>5$</span>
                                </div>
                                <div className='justify-between flex px-1 text-[15px] mt-5'>
                                    <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 justify-center flex "><AiOutlineShoppingCart className='text-[26px]' /></button>
                                    <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">RENT</button>
                                </div>
                            </div>
                            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
                                <img src={images.sofa} className='h-[300px] rounded-3xl' />
                                <div className='flex justify-between pt-1'>
                                    <p className=''>SOFA</p>
                                    <span className=''>5$</span>
                                </div>
                                <div className='justify-between flex px-1 text-[15px] mt-5'>
                                    <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 justify-center flex "><AiOutlineShoppingCart className='text-[26px]' /></button>
                                    <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">RENT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RentProducts