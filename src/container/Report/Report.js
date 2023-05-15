import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer.jsx'
const Report = () => {
  return (
    <div className=''>
      <Header/>
      <div className='bg-white flex h-screen'>
        <div className='text-white items-center flex-col flex font-bold w-full pt-2'>
          <div className='bg-[#242526] w-[800px] border-b-2 border-[#999999] hover:bg-[#555555] p-3 cursor-pointer flex justify-between items-center'>
            <p className='font-sans'>Report 1</p>
            <FaGreaterThan />
          </div>
          <div className='bg-[#242526] w-[800px] border-b-2 border-[#999999] hover:bg-[#555555] p-3 cursor-pointer flex justify-between items-center'>
            <p>Report 2</p>
            <FaGreaterThan />
          </div>
          <div className='bg-[#242526] w-[800px] border-b-2 border-[#999999] hover:bg-[#555555] p-3 cursor-pointer flex justify-between items-center'>
            <p>Report 3</p>
            <FaGreaterThan />
          </div>
          <div className='bg-[#242526] w-[800px] border-b-2 border-[#999999] hover:bg-[#555555] p-3 cursor-pointer flex justify-between items-center'>
            <p>Report 4</p>
            <FaGreaterThan />
          </div>
          <div className='bg-[#242526] w-[800px] border-b-2 border-[#999999] hover:bg-[#555555] p-3 cursor-pointer flex justify-between items-center'>
            <p>Report 5</p>
            <FaGreaterThan />
          </div>
          <div className='bg-[#242526] w-[800px] border-b-2 border-[#999999] hover:bg-[#555555] p-3 cursor-pointer flex justify-between items-center'>
            <p>Report 6</p>
            <FaGreaterThan />
          </div>
          <div className='bg-[#242526] w-[800px] border-b-2 border-[#999999] hover:bg-[#555555] p-3 cursor-pointer flex justify-between items-center'>
            <p>Report 7</p>
            <FaGreaterThan />
          </div>
          <div className='bg-[#242526] w-[800px] border-b-2 border-[#999999] hover:bg-[#555555] p-3 cursor-pointer flex justify-between items-center'>
            <p>Report 8</p>
            <FaGreaterThan />
          </div>
          <div className='bg-[#242526] w-[800px] border-b-2 border-[#999999] hover:bg-[#555555] p-3 cursor-pointer flex justify-between items-center'>
            <p>Report 9</p>
            <FaGreaterThan />
          </div>
          <div className='bg-[#242526] w-[800px] border-b-2 border-[#999999] hover:bg-[#555555] p-3 cursor-pointer flex justify-between items-center'>
            <p>Report 10</p>
            <FaGreaterThan />
          </div>
          <div className='bg-[#242526] w-[800px] border-b-2 border-[#999999] p-3 cursor-pointer'>
            <input className='w-full h-[100px] bg-[#888888] text-white border-red-400 font-sans p-2 items-center rounded-sm placeholder-white' placeholder='Other...' />
            <div className='items-center justify-center flex'>
              <button className='bg-[#444444] mt-2 items-center p-2 hover:bg-[#555555] w-[200px] rounded-full'>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Report