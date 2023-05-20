import React, { useEffect, useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineLogout } from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import imageDefault from '../../assets/avatar-default.gif'
import toast from 'react-hot-toast'
import { logout } from '../../redux/actions'
import { CLEAR_ALL_CATEGORY_POST, CLEAR_POST } from '../../constants'
import { getPost } from '../../redux/actions/post.action'
import Loading from '../../components/Loading'
import TimeAgo from 'timeago-react'
import { getAllCategoriesPost } from '../../redux/actions/categories-post.action'
import { parseTime } from '../../utils'


const Post = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isOpen, setisOpen] = useState(false)
  const { user } = useSelector(state => state.user)
  const { id } = useParams()

  const { loading, post, error } = useSelector(state => state.getPostReducer)
  const {
    loading: loadingCategories,
    error: erroCategories,
    categoriesPost,
  } = useSelector(state => state.getCategoriesPostReducer)

  console.log(categoriesPost)

  const handleLogout = () => {
    const id = toast.loading('submitting...')
    dispatch(logout())
    toast.remove(id)
    toast.success('logout successful')
  }

  useEffect(() => {
    if (error) {
      toast.error('get post error')
      dispatch({ type: CLEAR_POST })
      navigate('/blog')
    }
  }, [error])

  useEffect(() => {
    if (erroCategories) {
      toast.error('error to get categories post')
      dispatch({ type: CLEAR_ALL_CATEGORY_POST })
      navigate('/blog')
    }
  }, [erroCategories])


  useEffect(() => {
    if (id) {
      dispatch(getPost(id))
      dispatch(getAllCategoriesPost())
    }
  }, [id])


  return (
    <>
      {loading || loadingCategories ? <Loading /> : (
        <div>
          <div
            className='justify-between items-center flex w-full px-14 container mx-auto py-4 border-b border-solid border-b-gray-300'>
            <div className='w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start cursor-pointer '>
              <Link to='/blog'>
                <button className='flex items-center justify-center space-x-3'>
                  <a className=''><img src={imageDefault} alt='logo img' className=' w-10 h-10 rounded-lg' /></a>
                  <p className='font-bold'>BACK</p>
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
                          className='space-x-2 duration-500 active:border-black flex items-center justify-between'><img
                    src={user?.avatar?.url || imageDefault} alt='Profile Picture' className='h-10 w-10 rounded-full' />
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
                             src={user?.avatar?.url || imageDefault} />{user?.username || 'none user'}
                      </button>
                    </Link>
                    <div
                      onClick={handleLogout}
                      className={' w-full font-bold flex items-center p-2 text-[16px] cursor-pointer  hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'}>
                      <AiOutlineLogout
                        className='mr-2 h-10 w-10 text-[10px] bg-gray-300 rounded-full' />Log Out
                    </div>
                  </div>
                }
              </div>}
            </div>
          </div>
          <div className='px-36 pb-5'>
            <div className='w-full bg-gray-100 rounded-[.5rem] px-16 py-4 mt-4 pb-14'>
              {/**Header */}
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <div className='w-12 h-12'>
                    <img src={imageDefault} className='rounded-full cursor-pointer ' />
                  </div>
                  <div className='ml-3'>
                    <p className='font-bold text-gray-600 hover:underline cursor-pointer'>{post?.authorId}</p>
                    <div className='flex items-center'>
                      <p
                        className='text-xs text-[#9b9ea3] mr-1'><TimeAgo
                        datetime={post?.createdAt}
                        locale='vi_VN'
                      /> &#8226;</p>
                      <BiWorld className='text-[#9b9ea3] shrink-0' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-2 mb-2'>
                <h2 className='text-gray-700 font-bold text-[30px] text-justify'>{post?.title}</h2>
              </div>
              <div className='mt-2 mb-2'>
                <p className='text-gray-700 text-justify'>
                  {post?.description}
                </p>
              </div>
              {/**Image */}
              <div className=''>
                <img src={post?.thumbnail?.url || imageDefault} className='' />
              </div>
              <div dangerouslySetInnerHTML={{ __html: post?.body }}></div>
            </div>
          </div>
          <div className='w-full px-36'>
            <h2 className='font-bold text-[40px]'>Category Post</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 py-5 w-full'>
              {categoriesPost?.length > 0 && categoriesPost.slice(0, 4).map(item => (

                <div className='max-w-[450px] max-h-[470px] cursor-pointer' key={item._id}>
                  <img src={item?.thumbnail?.url || imageDefault}
                       className='w-full lg:h-full max-h-[260px] hover:scale-105 rounded-md relative'
                       alt={''} />
                  <Link to='/post'>
                    <div className='pb-5 pt-2'>
                      <p>{parseTime(item?.createdAt, '')}</p>
                      <div className='text-[20px] leading-7 font-bold text-black'>{item?.title || 'no title'}
                      </div>
                      <p className={'text-gray-400'}><span className={'text-md text-gray-900 font-semibold'}>{'Author' +
                        ' :'}</span> Admin </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}

export default Post