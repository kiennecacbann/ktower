import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import { Link, useNavigate } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineLogout } from 'react-icons/ai'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions'
import Input from '../../components/Input'
import imageDefault from '../../assets/avatar-default.gif'
import { createPost } from '../../redux/actions/post.action'
import { CLEAR_ALL_CATEGORY_POST, CLEAR_CREATE_BLOG, RESET_CREATE_BLOG } from '../../constants'
import { getAllCategoriesPost } from '../../redux/actions/categories-post.action'

const modules = {

  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'link', 'image', 'video'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
  ],
}
const CreateBlog = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  const { error, success } = useSelector(state => state.createPostReducer)
  const { error: erroGetCategories, categoriesPost } = useSelector(state => state.getCategoriesPostReducer)
  const navige = useNavigate()

  const [isOpen, setisOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')
  const [short_description, setShortDescription] = useState('')
  const [images, setImages] = useState('')
  const [imagesPreview, setImagePreview] = useState('')
  const [categoriesId, setCategoriesId] = useState('')


  const handleLogout = () => {
    const id = toast.loading('submitting...')
    dispatch(logout())
    toast.remove(id)
    toast.success('logout successful')
  }

  const handleSubmitCreateBlog = () => {
    const id = toast.loading('submitting...')
    const dataInput = {
      title,
      description,
      short_description,
      thumbnail: images,
      body: value,
      categoryId: categoriesId,
    }
    dispatch(createPost(dataInput))
    toast.remove(id)
  }

  const handleDataChange = (
    e,
  ) => {
    const target = e.target
    if (!target.files) return
    const files = Array.from(target.files)

    files.forEach((file) => {
      const render = new FileReader()

      render.onload = () => {
        if (render.readyState === 2) {
          if (render.result) {
            setImagePreview(render.result)
            setImages(render.result)
          }
        }
      }
      render.readAsDataURL(file)
    })
  }

  useEffect(() => {
    if (error) {
      toast.error('Error to create post')
      dispatch({ type: CLEAR_CREATE_BLOG })
    }
  }, [error])

  useEffect(() => {
    if (success) {
      toast.success('Create post successfully')
      dispatch({ type: RESET_CREATE_BLOG })
      navige('/blog')
    }
  }, [success])

  useEffect(() => {
    if (erroGetCategories) {
      toast.error(erroGetCategories)
      dispatch({ type: CLEAR_ALL_CATEGORY_POST })
      navige('/')
    }
  }, [erroGetCategories])

  useEffect(() => {
    dispatch(getAllCategoriesPost())
  }, [])

  return (
    <div>
      <div
        className='justify-between items-center flex w-full px-14 container mx-auto py-4 border-b border-solid border-b-gray-300'>
        <div className='w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start cursor-pointer '>
          <Link to='/blog'>
            <button className='flex items-center justify-center space-x-3'>
              <img src={imageDefault} alt='logo img' className=' w-10 h-10 rounded-lg' />
              <p className='font-bold'>BACK</p>
            </button>
          </Link>
        </div>
        <div className='relative items-center justify-between z-[9999] flex'>
          <div className='flex space-x-5'>
            <div>
              <button
                disabled={!images || !title || !description || !short_description || !value}
                onClick={handleSubmitCreateBlog}
                className='disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-700 disabled:text-white w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 '>POST
              </button>
            </div>
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
                    <img className='h-10 w-10 rounded-full mr-2' src={user?.avatar?.url || imageDefault}
                         alt={'user'} /> {user?.username || 'Kiên nè'}
                  </button>
                </Link>
                <div
                  className=' w-full font-bold flex items-center p-2 text-[16px] cursor-pointer  hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                  onClick={handleLogout}>
                  <AiOutlineLogout className='mr-2 h-10 w-10 text-[10px] bg-gray-300 rounded-full' />Log Out
                </div>
              </div>
            }
          </div>}
        </div>
      </div>
      <div className='relative px-14 h-screen'>
        <div className='flex flex-row justify-center h-full w-full items-center'>
          <div className='relative h-full w-[60%] flex flex-col overflow-scroll'>
            <div className=''>
              <input placeholder='Tittle' value={title} onChange={e => setTitle(e.target.value)}
                     className='w-full text-[35px] font-semibold h-[100px] placeholder:text-[35px] outline-none placeholder:font-bold' />
            </div>
            <div className={'flex flex-col gap-4 mb-2'}>
              <Input name={'description'} value={description} onChange={e => setDescription(e.target.value)}
                     label={'Description'} as={'textarea'} />
              <Input name={'short_description'} value={short_description}
                     onChange={e => setShortDescription(e.target.value)}
                     label={'Short description'} as={'textarea'} />
              <Input name={'categoriesId'} value={categoriesId}
                     onChange={e => setCategoriesId(e.target.value)}
                     label={'Categories'} as={'select'} dataSelect={categoriesPost ? categoriesPost.map(item => ({
                _id: item._id,
                name: item.title,
              })) : []} />
              <Input name={'thumbnail'} value={images} onChange={handleDataChange}
                     label={'Thumbnail'} type={'file'} />
              <div className='flex gap-2 items-center justify-center'>
                {imagesPreview && (
                  //@ts-ignore
                  <img
                    className='object-cover w-[400px] h-[300px] rounded-md'
                    src={imagesPreview}
                    alt='Avatar priview'
                  />
                )}
              </div>
              <div>
                <ReactQuill className='h-full mb-20 w-[100%]'
                            theme='snow'
                            value={value}
                            onChange={setValue}
                            modules={modules}
                />
              </div>
            </div>
          </div>
          <div
            className='relative h-full w-[50%] flex flex-col border-l border-solid border-black p-[10px] overflow-scroll pt-[150px]'
            dangerouslySetInnerHTML={{ __html: value }}>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CreateBlog