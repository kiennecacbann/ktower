import React from 'react';
import images from '../../constants/images';
import { AiFillHome, AiOutlineMessage, AiFillBell, AiFillPrinter, AiTwotoneWallet } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import App from '../../App';

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="relative flex flex-wrap items-center justify-between bg-[#242526] ">
            <div className="container space-x-4 pr-4 mx-auto flex flex-wrap items-center justify-between border-b-2 border-gray-700 ">
                <div className="w-full pl-7 flex justify-between lg:w-auto lg:static lg:block lg:justify-start cursor-pointer ">
                    <a className=''><img src={images.logo} alt="logo img" className=' w-20 h-20 rounded-full' /></a>
                </div>
                <div className={
                    "lg:flex flex-grow items-center " +
                    (navbarOpen ? " flex" : " hidden")
                }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <Link to='/home'>
                            <li className="nav-item">
                                <a to="/app"
                                    className="group relative cursor-pointer px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                >
                                    <span><i className=" text-white opacity-75" alt='Home'><AiFillHome className='w-8 h-8' /></i></span>
                                    <span class="group-hover:opacity-100 transition-opacity bg-white p-3 text-black rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-10 mx-auto">Home</span>
                                </a>
                            </li>
                        </Link>
                        <Link to='/chat'>
                            <li className="nav-item">
                                <a
                                    className="group relative px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="#pablo"
                                >
                                    <span><i className=" text-white opacity-75" alt='Home'><AiOutlineMessage className='w-8 h-8' /></i></span>
                                    <span class="group-hover:opacity-100 transition-opacity bg-white p-3 text-black rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-10 mx-auto">Message</span>
                                </a>
                            </li>
                        </Link>
                        <li className="nav-item">
                            <a
                                className="group relative px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                href="#pablo"
                            >
                                <span><i className=" text-white opacity-75" alt='Home'><AiFillBell className='w-8 h-8' /></i></span>
                                <span class="group-hover:opacity-100 transition-opacity bg-white p-3 text-black rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-10 mx-auto">Notification</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="group relative px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                href="#pablo"
                            >
                                <span><i className=" text-white opacity-75" alt='Home'><AiTwotoneWallet className='w-8 h-8' /></i></span>
                                <span class="group-hover:opacity-100 transition-opacity bg-white p-3 text-black rounded-md absolute left-1/2 -translate-x-1/2 translate-y-full opacity-0 m-10 mx-auto">Bill</span>
                            </a>
                        </li>
                        <div className="flex items-center">
                            <a className='cursor-pointer'><img src={images.user} alt='Profile Picture' className='h-10 w-10 rounded-full' /></a>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
