import React from 'react'
import images from '../../constants/images'
import { AiOutlineSearch, AiFillCaretDown, AiOutlineShoppingCart, AiOutlineHistory, AiFillHome, AiOutlineThunderbolt } from 'react-icons/ai'
import { Select } from 'antd'
import { Link } from 'react-router-dom'
const RentProducts = () => {
    return (
        <div className='bg-[#242526]'>
            <div className='flex justify-between items-center px-[100px]'>
                <div className=" mt-10 w-full flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start cursor-pointer ">
                    <a className=''><img src={images.logo} alt="logo img" className=' w-20 h-20 rounded-full' /></a>
                </div>
                <div className='flex'>
                    <input placeholder='Search...' className='w-[500px] h-12 p-2 bg-[#d5d1ce] placeholder:text-black relative rounded border-none outline-none' />
                    <AiOutlineSearch className='mt-4 absolute ml-[470px] ' />
                </div>
                <div className='flex text-3xl space-x-3 text-white hover:cursor-pointer'>
                    <Link to='/cart'>
                        <AiOutlineShoppingCart className='hover:bg-[#888888] hover:rounded-full' />
                    </Link>
                    <Link to='/orderhistory'>
                        <AiOutlineHistory />
                    </Link>
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
                        <div className='relative flex flex-wrap justify-between text-white'>
                            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
                                <img src={images.sofa} className='h-[300px] rounded-3xl' />
                                <div className='flex justify-between pt-1'>
                                    <p className=''>SOFA</p>
                                    <span className=''>5$</span>
                                </div>
                                <div className='justify-between flex px-1 text-[15px] mt-5'>
                                    <button type="button" class="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2 justify-center items-center flex"><AiOutlineShoppingCart className='text-[26px]' /></button>
                                    <button type="button" class="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2">RENT</button>
                                </div>
                            </div>
                            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
                                <img src={images.sofa} className='h-[300px] rounded-3xl' />
                                <div className='flex justify-between pt-1'>
                                    <p className=''>SOFA</p>
                                    <span className=''>5$</span>
                                </div>
                                <div className='justify-between flex px-1 text-[15px] mt-5'>
                                    <button type="button" class="w-full flex text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2 justify-center"><AiOutlineShoppingCart className='text-[26px]' /></button>
                                    <button type="button" class="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2">RENT</button>
                                </div>
                            </div>
                            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
                                <img src={images.sofa} className='h-[300px] rounded-3xl' />
                                <div className='flex justify-between pt-1'>
                                    <p className=''>SOFA</p>
                                    <span className=''>5$</span>
                                </div>
                                <div className='justify-between flex px-1 text-[15px] mt-5'>
                                    <button type="button" class="w-full flex text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2 justify-center"><AiOutlineShoppingCart className='text-[26px]' /></button>
                                    <button type="button" class="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2">RENT</button>
                                </div>
                            </div>
                            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
                                <img src={images.sofa} className='h-[300px] rounded-3xl' />
                                <div className='flex justify-between pt-1'>
                                    <p className=''>SOFA</p>
                                    <span className=''>5$</span>
                                </div>
                                <div className='justify-between flex px-1 text-[15px] mt-5'>
                                    <button type="button" class="w-full flex text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2 justify-center"><AiOutlineShoppingCart className='text-[26px]' /></button>
                                    <button type="button" class="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2">RENT</button>
                                </div>
                            </div>
                            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
                                <img src={images.sofa} className='h-[300px] rounded-3xl' />
                                <div className='flex justify-between pt-1'>
                                    <p className=''>SOFA</p>
                                    <span className=''>5$</span>
                                </div>
                                <div className='justify-between flex px-1 text-[15px] mt-5'>
                                    <button type="button" class="w-full flex text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2 justify-center"><AiOutlineShoppingCart className='text-[26px]' /></button>
                                    <button type="button" class="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2">RENT</button>
                                </div>
                            </div>
                            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
                                <img src={images.sofa} className='h-[300px] rounded-3xl' />
                                <div className='flex justify-between pt-1'>
                                    <p className=''>SOFA</p>
                                    <span className=''>5$</span>
                                </div>
                                <div className='justify-between flex px-1 text-[15px] mt-5'>
                                    <button type="button" class="w-full flex text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2 justify-center"><AiOutlineShoppingCart className='text-[26px]' /></button>
                                    <button type="button" class="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2">RENT</button>
                                </div>
                            </div>
                            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
                                <img src={images.sofa} className='h-[300px] rounded-3xl' />
                                <div className='flex justify-between pt-1'>
                                    <p className=''>SOFA</p>
                                    <span className=''>5$</span>
                                </div>
                                <div className='justify-between flex px-1 text-[15px] mt-5'>
                                    <button type="button" class="w-full flex text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2 justify-center"><AiOutlineShoppingCart className='text-[26px]' /></button>
                                    <button type="button" class="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2">RENT</button>
                                </div>
                            </div>
                            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
                                <img src={images.sofa} className='h-[300px] rounded-3xl' />
                                <div className='flex justify-between pt-1'>
                                    <p className=''>SOFA</p>
                                    <span className=''>5$</span>
                                </div>
                                <div className='justify-between flex px-1 text-[15px] mt-5'>
                                    <button type="button" class="w-full flex text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2 justify-center"><AiOutlineShoppingCart className='text-[26px]' /></button>
                                    <button type="button" class="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2">RENT</button>
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