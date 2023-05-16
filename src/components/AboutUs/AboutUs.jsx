import React from 'react'
import images from '../../constants/images'
const AboutUs = () => {
    return (
        <section id='about'>
            <div className='pt-[80px] px-14 '>
                <div className='items-center justify-center flex flex-col pb-10'>
                    <span className='text-[14px] font-semibold leading-5 tracking-wider uppercase font-[Poppins,sans-serif] text-[#ff5857]'>GET TO KNOW US</span>
                    <h2 className='text-[46px] font-extrabold'>ABOUT US</h2>
                </div>
                <div class="relative text-center">
                    <img src={images.saigon} class="block mx-auto w-full h-[400px] rounded-lg" alt="My Image" />
                    <p class="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='pt-10 justify-between grid grid-cols-2 gap-8 lg:py-8 md:grid-cols-2'>
                    <div>
                        <h2 className='text-[36px] font-extrabold pb-5'>Our Story</h2>
                        <p className='pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className=''>
                        <img src={images.login_img2} className='rounded-lg w-[687px] max-h-[390px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default AboutUs