import React, { useEffect, useState } from 'react'
import images from '../../assets/avatar-default.gif'
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineLogout } from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/Loading'
import toast from 'react-hot-toast'
import { CLEAR_ALL_POST } from '../../constants'
import { getPosts } from '../../redux/actions/post.action'
import { logout } from '../../redux/actions'
import TimeAgo from 'timeago-react'

const Blogs = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isOpen, setisOpen] = useState(false)

  const { user } = useSelector(state => state.user)
  const { loading, posts, error } = useSelector(state => state.getPostsReducer)

  const handleLogout = () => {
    const id = toast.loading('submitting...')
    dispatch(logout())
    toast.remove(id)
    toast.success('logout successful')
  }


  useEffect(() => {
    if (error) {
      toast.error('Error to load blogs')
      dispatch({ type: CLEAR_ALL_POST })
      navigate('/')
    }
  }, [error])

  useEffect(() => {
    dispatch(getPosts())
    return () => dispatch(getPosts())
  }, [])

  return (
    <>
      {loading ? <Loading /> : (
        <div className='w-screen sm:w-full'>
          <div
            className='justify-between items-center flex w-full px-14 container mx-auto py-4 border-b border-solid border-b-gray-300'>
            <div className='w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start cursor-pointer '>
              <Link to='/'>
                <button className='flex items-center justify-center space-x-3'>
                  <img src={images} alt='logo img' className=' w-10 h-10 rounded-lg' />
                  <p className='font-semibold text-md'>Go to home</p>
                </button>
              </Link>

            </div>
            <div className='relative items-center justify-between z-[9999] flex'>
              <div className='flex space-x-5'>
                <Link to='/createblog'>
                  <button type='button'
                          className='w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 '>Create
                    Blog
                  </button>
                </Link>
                <div>
                  <button onClick={() => setisOpen((prev) => !prev)}
                          className='space-x-2 duration-500 active:border-black flex items-center justify-between'>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={user?.avatar?.url || images} alt='Profile Picture' className='h-10 w-10 rounded-full' />
                    {!isOpen ? (
                      <AiOutlineCaretDown className='h-8' />
                    ) : (
                      <AiOutlineCaretUp className='h-8' />
                    )}
                  </button>
                </div>
              </div>

              {isOpen && <div
                className='w-[360px] right-1 mr-3 fixed bg-white border-2 border-black top-20  items-center justify-center flex flex-col rounded-lg p-2 active:z-50 '>
                {
                  <div className='w-full space-y-2 flex flex-col'>
                    <Link to='/profile'>
                      <button
                        className=' w-full font-bold flex items-center p-2 text-[16px] cursor-pointer  hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'>
                        <img className='h-10 w-10 rounded-full mr-2'
                             src={user?.avatar?.url || images} />{user?.username || 'Kienne'}
                      </button>
                    </Link>
                    <div
                      onClick={handleLogout}
                      className=' w-full font-bold flex items-center p-2 text-[16px] cursor-pointer  hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'>
                      <AiOutlineLogout
                        className='mr-2 h-10 w-10 text-[10px] bg-gray-300 rounded-full' />Log Out
                    </div>
                  </div>
                }
              </div>}
            </div>
          </div>
          <div className='px-36 pt-5'>
            <div className={'flex flex-col gap-2 mb-5'}>
              <h2 className='font-semibold text-gray-700 text-[32px]'>Blogs</h2>
              <p className={'text-gray-500 text-md mt-2'}>This is all posts</p>
            </div>
            {/* map o day */}
            {posts?.length > 0 && posts.slice(0, 10).map(item => (
              <Link to={`/blog/${item._id}`}
                    className='border border-solid rounded-lg border-gray-300 shadow-md p-5 mb-5 block'
                    key={item._id}>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <div className='w-12 h-12 rounded-full'>
                      <img src={item?.thumbnail?.url || images}
                           className=' w-full h-full rounded-full cursor-pointer ' alt={'image'} />
                    </div>
                    <div className='ml-3'>
                      <p className='font-bold text-black hover:underline cursor-pointer'>Users</p>
                      <div className='flex items-center'>
                        <p className='text-xs text-[#9b9ea3] mr-1'><TimeAgo
                          datetime={item?.createdAt}
                          locale='vi_VN'
                        /> &#8226;</p>
                        <BiWorld className='text-[#9b9ea3] shrink-0' />
                      </div>
                    </div>
                  </div>

                </div>
                <div className='flex justify-between gap-10'>
                  <div className='mt-2 mb-2'>
                    <div>
                      <h2
                        className='text-black font-semibold text-[24px] text-justify line-clamp-2 mb-2'>{item?.title || 'No title'}</h2>
                    </div>
                    <p
                      className='text-gray-500 text-md font-medium text-justify line-clamp-3'>{item?.description || 'None' +
                      ' description'}</p>
                  </div>
                  <img className='rounded-xl max-w-[300px] max-h-[200px] w-[50%] h-[50%] flex-shrink-0'
                       src={item?.thumbnail?.url || images} />
                </div>

              </Link>
            ))}
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}

export default Blogs