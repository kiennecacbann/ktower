import React, { useState } from 'react'
import images from '../../assets/avatar-default.gif'
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineLogout, AiOutlineSearch } from 'react-icons/ai'
import { GrNotification } from 'react-icons/gr'
import { RiBillLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions'
import toast from 'react-hot-toast'


export default function Navbar({ fixed }) {
  const dispatch = useDispatch()
  const [isOpen, setisOpen] = useState(false)
  const [openNoti, setopenNoti] = useState(false)
  const [openBill, setopenBill] = useState(false)

  const { user } = useSelector(state => state.user)

  const hadnleLogout = () => {
    const id = toast.loading('Logout....')
    // @ts-ignore
    dispatch(logout())
    toast.success('Logout successfully', { id })
  }


  return (
    <nav className='relative bg-white '>
      <div className='container mx-auto px-14 py-7'>
        <div className='justify-between items-center flex w-full'>
          <div className='w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start cursor-pointer '>
            <Link to='/'>
              <button className='flex items-center justify-center space-x-3'>
                <img src={images} alt='logo img'
                     className=' w-10 h-10 rounded-lg' />
                <p className='font-bold'>K-TOWER</p>
              </button>
            </Link>
          </div>
          <Link to='/home'>
            <button
              className='cursor-pointer p-1 flex  flex-col items-center justify-center hover:bg-gray-200 hover:font-bold text-black hover:rounded-xl active:bg-gray-200'>
              <p className=' f'>Home</p>
            </button>
          </Link>
          <a href='#about'
             className='cursor-pointer p-1 flex  flex-col items-center justify-center hover:bg-gray-200 hover:font-bold text-black hover:rounded-xl active:bg-gray-200'>
            <p className=' f'>About</p>
          </a>
          <Link to='/rent'>
            <button
              className='cursor-pointer p-1 items-center justify-center hover:bg-gray-200 hover:font-bold text-black hover:rounded-xl '>
              <p className=' '>Rent Interior</p>
            </button>
          </Link>
          <Link to='/report'>
            <button
              className='cursor-pointer p-1 flex  items-center justify-center hover:bg-gray-200 hover:font-bold text-black hover:rounded-xl '>
              <p className=' '>Report Problem</p>
            </button>
          </Link>
          <Link to='/blog'>
            <button
              className='cursor-pointer p-1 flex items-center justify-center hover:bg-gray-200 hover:font-bold text-black hover:rounded-xl '>
              <p className=' '>Blog</p>
            </button>
          </Link>
          <Link to='/contact'>
            <button
              className='cursor-pointer p-1 flex items-center justify-center hover:bg-gray-200 hover:font-bold text-black hover:rounded-xl '>
              <p className=' '>Contact</p>
            </button>
          </Link>
          <div className='flex text-gray-400'>
            <input placeholder='Search...'
                   className='w-[300px] h-10 px-4 py-5 bg-transparent border-2  border-gray-300 placeholder:text-gray-400 relative rounded-3xl outline-none' />
            <AiOutlineSearch className='mt-4 absolute ml-[270px]' />
          </div>
          <div className='relative items-center justify-between block z-[9999]'>
            <button onClick={() => {
              setisOpen(false)
              setopenBill(false)
              setopenNoti((prev) => !prev)
            }} className='text-[30px] flex relative'>
              <GrNotification className='' />
              <span
                className='ml-[15px] w-[15px] text-[15px] h-[15px] bg-red-600 rounded-xl items-center justify-center flex text-white absolute'>1</span>
            </button>
            {openNoti && <div
              className='w-[360px] fixed bg-white right-1 mr-3 mt-2 pt-2 flex-col items-center rounded-lg border-solid border-2 border-gray-500'>
              {
                <div className='py-3 px-2 max-h-[630px] overflow-y-scroll'>
                  <span className='font-bold text-[22px] pb-3'>Notifications</span>
                  <div className='justify-center items-center flex flex-col '>
                    <a href='#'
                       class=' w-full p-3 cursor-pointer block hover:bg-gray-200 dark:hover:bg-gray-100 dark:hover:text-white'>
                      <div className='flex items-center justify-center space-x-1'>
                        <img src={user?.avatar?.url || images} className='h-10 w-10 rounded-full' />
                        <div className='flex flex-col'>
                          <div className='flex text-[17px] space-x-1'>
                            <p className='font-bold '>ADMIN</p>
                            <p>has a new post.</p>
                          </div>
                          <div>
                            <p className='text-[blue] font-bold text-[12px]'>3 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href='#'
                       class=' w-full p-3 cursor-pointer block hover:bg-gray-200 dark:hover:bg-gray-100 dark:hover:text-white'>
                      <div className='flex items-center justify-center space-x-1'>
                        <img src={images} className='h-10 w-10 rounded-full' />
                        <div className='flex flex-col'>
                          <div className='flex text-[17px] space-x-1'>
                            <p className='font-bold '>ADMIN</p>
                            <p>has a new post.</p>
                          </div>
                          <div>
                            <p className='text-[blue] font-bold text-[12px]'>3 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href='#'
                       class=' w-full p-3 cursor-pointer block hover:bg-gray-200 dark:hover:bg-gray-100 dark:hover:text-white'>
                      <div className='flex items-center justify-center space-x-1'>
                        <img src={images} className='h-10 w-10 rounded-full' />
                        <div className='flex flex-col'>
                          <div className='flex text-[17px] space-x-1'>
                            <p className='font-bold '>ADMIN</p>
                            <p>has a new post.</p>
                          </div>
                          <div>
                            <p className='text-[blue] font-bold text-[12px]'>3 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href='#'
                       class=' w-full p-3 cursor-pointer block hover:bg-gray-200 dark:hover:bg-gray-100 dark:hover:text-white'>
                      <div className='flex items-center justify-center space-x-1'>
                        <img src={images} className='h-10 w-10 rounded-full' />
                        <div className='flex flex-col'>
                          <div className='flex text-[17px] space-x-1'>
                            <p className='font-bold '>ADMIN</p>
                            <p>has a new post.</p>
                          </div>
                          <div>
                            <p className='text-[blue] font-bold text-[12px]'>3 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href='#'
                       class=' w-full p-3 cursor-pointer block hover:bg-gray-200 dark:hover:bg-gray-100 dark:hover:text-white'>
                      <div className='flex items-center justify-center space-x-1'>
                        <img src={images} className='h-10 w-10 rounded-full' />
                        <div className='flex flex-col'>
                          <div className='flex text-[17px] space-x-1'>
                            <p className='font-bold '>ADMIN</p>
                            <p>has a new post.</p>
                          </div>
                          <div>
                            <p className='text-[blue] font-bold text-[12px]'>3 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              }
            </div>}
          </div>
          <div className='relative items-center justify-between block z-[9999]'>
            <button onClick={() => {
              setopenNoti(false)
              setisOpen(false)
              setopenBill((prev) => !prev)
            }} className='text-[30px] flex relative'>
              <RiBillLine className='' />
              <span
                className='ml-[15px] w-[15px] text-[15px] h-[15px] bg-red-600 rounded-xl items-center justify-center flex text-white absolute'>1</span>
            </button>
            {openBill && <div
              className='w-[360px] fixed bg-white right-1 mr-3 mt-2 pt-2 flex-col items-center rounded-lg border-solid border-2 border-gray-500'>
              {
                <div className='py-3 px-2 max-h-[630px] overflow-y-scroll'>
                  <span className='font-bold text-[22px] pb-3'>Bills</span>
                  <div
                    className='justify-center items-center flex flex-col w-full hover:bg-gray-200 dark:hover:bg-gray-100 dark:hover:text-white'>
                    <Link to='/bill'>
                      <button class='items-center justify-center space-x-1 font-bold w-full p-3 cursor-pointer block '>
                        Bill 01 May 2023
                      </button>
                    </Link>
                  </div>
                </div>
              }
            </div>}
          </div>
          <div className='relative items-center justify-between block z-[9999]'>
            <button onClick={() => {
              setopenNoti(false)
              setopenBill(false)
              setisOpen((prev) => !prev)
            }}
                    className='space-x-2 duration-500 active:border-black flex items-center justify-between'><img
              src={user?.avatar?.url || images} alt='Profile Picture' className='h-10 w-10 rounded-full' />
              {!isOpen ? (
                <AiOutlineCaretDown className='h-8' />
              ) : (
                <AiOutlineCaretUp className='h-8' />
              )}
            </button>
            {isOpen && <div
              className='w-[360px] right-1 mr-3 fixed bg-white border-2 border-black top-20  items-center justify-center flex flex-col rounded-lg p-2 active:z-50 '>
              {
                <div className='w-full space-y-2 flex flex-col'>
                  <Link to='/profile'>
                    <button
                      class=' w-full font-bold flex items-center p-2 text-[16px] cursor-pointer  hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'>
                      <img className='h-10 w-10 rounded-full mr-2'
                           src={user?.avatar?.url || images} />{user?.username || 'none'}
                    </button>
                  </Link>
                  <div onClick={hadnleLogout}
                       className={'w-full font-bold flex items-center p-2 text-[16px] cursor-pointer' +
                         ' hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'}>
                    <AiOutlineLogout
                      className='mr-2 h-10 w-10 text-[10px] bg-gray-300 rounded-full' />Log
                    Out
                  </div>
                </div>
              }
            </div>}
          </div>
        </div>
      </div>
    </nav>

  )
}
