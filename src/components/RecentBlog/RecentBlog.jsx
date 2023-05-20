import React from 'react'
import { parseTime } from '../../utils'
import { Link } from 'react-router-dom'

const RecentBlog = ({ data }) => {
  return (
    <div className='pt-[50px]'>
      <div className='items-center justify-center flex flex-col'>
        <span
          className='text-[14px] font-semibold leading-5 tracking-wider uppercase font-[Poppins,sans-serif] text-[#ff5857]'>NEWS & UPDATES</span>
        <h2 className='text-[46px] font-extrabold'>CATEGORIES BLOGS</h2>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 py-10 px-10'>
        {data?.slice(0, 4).map(item => (
          <Link to={`/blog/categories/${item._id}`}
                className='block max-w-[450px] w-full max-h-[470px] h-full cursor-pointer' key={item._id}>
            <div className='flex'>
              <img src={item?.thumbnail?.url}
                   className='w-full h-full lg:h-[240px] max-h-[240px] rounded-md hover:scale-105 relative'
                   alt={'thumbnail'} />
            </div>
            <div>
              <div className='pb-5 pt-2'>
                <p>{parseTime(item?.createdAt, '')}</p>
                <p className='text-[20px] leading-7 line-clamp-2 font-bold text-black min-h-[50px]'>{item?.title}</p>
                <p className={'my-2 text-xs text-gray-600 line-clamp-2'}>
                  {item?.description}
                </p>
                <p>By Admin</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RecentBlog