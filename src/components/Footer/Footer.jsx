import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='w-full py-[20px] px-6 bg-gray-700'>
        <div>
          <div className={'flex flex-col mx-auto items-center text-sky-500 text-[12px] font-semibold'}>
            <h5>Website: <span className={'underline'}>Thanh  - Kien - Truong</span></h5>
            <p className='text-xs text-white capitalize xl:text-center'>© 2023 All rights reserved </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer