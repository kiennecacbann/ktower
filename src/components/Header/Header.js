import React from 'react';
import images from '../../constants/images';
import { AiOutlineSearch, AiFillMessage } from 'react-icons/ai';
import { MdOutlineHomeRepairService, MdReportProblem } from 'react-icons/md';
import { GrNotification } from 'react-icons/gr';
import {RiBillLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { VscLibrary } from 'react-icons/vsc';
import App from '../../App';

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="relative bg-white ">
            <div className="container mx-auto px-14 py-7 ">
                <div className='justify-between items-center flex w-full'>
                    <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start cursor-pointer ">
                        <div className='flex items-center justify-center space-x-3'>
                            <a className=''><img src={images.logo} alt="logo img" className=' w-10 h-10 rounded-lg' /></a>
                            <p className='font-bold'>K-TOWER</p>
                        </div>
                    </div>
                    <button className='cursor-pointer p-1 flex  flex-col items-center justify-center hover:bg-gray-200 hover:font-bold text-black hover:rounded-xl active:bg-gray-200'>
                        <p className=' f'>Home</p>
                    </button>
                    <button className='cursor-pointer p-1 flex  flex-col items-center justify-center hover:bg-gray-200 hover:font-bold text-black hover:rounded-xl active:bg-gray-200'>
                        <p className=' f'>About</p>
                    </button>
                    <Link to='/rent'>
                        <button className='cursor-pointer p-1 items-center justify-center hover:bg-gray-200 hover:font-bold text-black hover:rounded-xl '>
                            <p className=' '>Rent Interior</p>
                        </button>
                    </Link>
                    <Link to='/report'>
                        <button className='cursor-pointer p-1 flex  items-center justify-center hover:bg-gray-200 hover:font-bold text-black hover:rounded-xl '>
                            <p className=' '>Report Problem</p>
                        </button>
                    </Link>
                    <button className='cursor-pointer p-1 flex items-center justify-center hover:bg-gray-200 hover:font-bold text-black hover:rounded-xl '>
                        <p className=' '>Blog</p>
                    </button>
                    <button className='cursor-pointer p-1 flex items-center justify-center hover:bg-gray-200 hover:font-bold text-black hover:rounded-xl '>
                        <p className=' '>Contact</p>
                    </button>
                    <div className='flex text-gray-400'>
                        <input placeholder='Search...' className='w-[300px] h-10 px-4 py-5 bg-transparent border-2  border-gray-300 placeholder:text-gray-400 relative rounded-3xl outline-none' />
                        <AiOutlineSearch className='mt-4 absolute ml-[270px]' />
                    </div>
                    <Link to='/chat'>
                        <button className='text-[30px]'>
                            <AiFillMessage />
                        </button>
                    </Link>
                    <Link>
                        <button className='text-[30px]'>
                            <GrNotification className='' />
                        </button>
                    </Link>
                    <Link>
                        <button className='text-[30px]'>
                            <RiBillLine className='' />
                        </button>
                    </Link>
                    <div className=''>
                        <ul className="flex lg:flex-row list-none lg:ml-auto">
                            <div className="flex items-center">
                                <a className='cursor-pointer'><img src={images.user} alt='Profile Picture' className='h-10 w-10 rounded-full' /></a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
