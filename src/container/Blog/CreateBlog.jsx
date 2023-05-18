import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Blog from './Blog'
import images from '../../constants/images';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AiOutlineSearch, AiOutlineLogout, AiFillMessage, AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
const modules = {

  toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote", "link", "image", "video"],
      [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
      ],
  ],
};
const CreateBlog = () => {
  const [isOpen, setisOpen] = useState(false);
  const [value, setValue] = useState("");
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
              <button type="button" class="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">POST</button>
            </div>
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
      </div >
      <div className='relative px-14 h-screen'>
        <div className='flex flex-row justify-center h-full w-full items-center'>
          <div className='relative h-full w-[60%] flex flex-col overflow-scroll'>
            <div className=''>
              <input placeholder='Tittle' className='w-full h-[100px] placeholder:text-[35px] outline-none placeholder:font-bold' />
            </div>
            <ReactQuill className='h-auto w-[100%]'
              theme="snow"
              value={value}
              onChange={setValue}
              modules={modules}
            />
          </div>
          <div className='relative h-full w-[50%] flex flex-col border-l border-solid border-black p-[10px] overflow-scroll pt-[150px]'
            dangerouslySetInnerHTML={{ __html: value }}>
          </div>
        </div>
      </div>      
    <Footer />
    </div >
  )
}

export default CreateBlog