import React from 'react'
import { parseTime } from '../../utils'
import { Link } from 'react-router-dom'

const UtilAllContainer = ({ data, all = false }) => {
  if (!all) {
    return (
      <div className='pt-[50px]'>
        <div className='items-center justify-center flex flex-col'>
        <span
          className='text-[14px] font-semibold leading-5 tracking-wider uppercase font-[Poppins,sans-serif] text-[#ff5857]'>NEWS & UPDATES</span>
          <h2 className='text-[46px] font-extrabold uppercase'>ALL UTILS</h2>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 py-10 px-10'>
          {data?.slice(0, 4).map(item => (
            <Link to={`/util/${item._id}`} className='block max-w-[450px] w-full max-h-[470px] h-full cursor-pointer'
                  key={item._id}>
              <div className='flex'>
                <img src={item?.images?.url}
                     className='w-full h-full lg:h-[240px] max-h-[240px] rounded-md hover:scale-105 relative'
                     alt={'thumbnail'} />
              </div>
              <div>
                <div className='pb-5 pt-2'>
                  <p className={'text-xs text-gray-400'}>{parseTime(item?.createdAt, '')}</p>
                  <p className='text-[20px] leading-7 line-clamp-1 font-semibold text-gray-700'>{item?.title}</p>
                  <p className={'my-2 text-xs text-gray-600 line-clamp-2'}>
                    {item?.price}
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

  return (
    <div className='pt-[50px]'>
      <div className='items-center justify-center flex flex-col'>
        <span
          className='text-[14px] font-semibold leading-5 tracking-wider uppercase font-[Poppins,sans-serif] text-[#ff5857]'>NEWS & UPDATES</span>
        <h2 className='text-[46px] font-extrabold uppercase'>All UTILS</h2>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 py-10 px-10'>
        {data?.map(item => (
          <Link to={`/util/${item._id}`} className='block max-w-[450px] w-full max-h-[470px] h-full cursor-pointer'
                key={item._id}>
            <div className='flex'>
              <img src={item?.images?.url}
                   className='w-full h-full lg:h-[240px] max-h-[240px] rounded-md hover:scale-105 relative'
                   alt={'thumbnail'} />
            </div>
            <div>
              <div className='pb-5 pt-2'>
                <p className={'text-xs text-gray-400'}>{parseTime(item?.createdAt, '')}</p>
                <p className='text-[20px] leading-7 line-clamp-1 font-semibold text-gray-700'>{item?.title}</p>
                <p className={'my-2 text-xs text-gray-600 line-clamp-2'}>
                  ${item?.price}
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

export default UtilAllContainer