import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer.jsx'
import images from '../../constants/images'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
const ProductDetail = () => {

  return (
    <div className=''>
      <Header />
      <div className='px-14 grid grid-cols-1 md:grid-cols-2 gap-10 justify-between pb-10'>
        <div className=''>
          <div className=''>
            <img className='' src={images.sofa}  />
          </div>
          <div className='flex flex-row gap-5 mt-5 w-[50%]'>
            <img src={images.sofa1} />
            <img src={images.sofa2} />
          </div>
        </div>
        <div className='w-full'>
          <h2 className='font-bold text-[35px] text-black uppercase'>Sofa</h2>
          <p className='font-bold text-[25px] text-black uppercase'>35$</p>
          <div className='mt-10'>
            <p className='text-[15px] text-black uppercase font-bold'>Description:</p>
            <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className='mt-5 bg-slate-300 p-5 w-[50%] rounded-lg text-black'>
            <p className='flex'>☑ Material: <p>Cotton, Inox.</p></p>
            <p className='flex'>☑ Color: <p>Dark Gray.</p></p>
            <p className='flex'>☑ Size: <p>80cm x 160cm </p></p>
          </div>
          <div class="number w-2/5 mt-3 cursor-pointer space-x-1" >
            <span class="text-[26px] minus w-[40px] h-full bg-[#f2f2f2] border border-solid inline-block align-middle text-center">-</span>
            <input className=' text-[26px] h-full w-[100px] text-center inline-block align-middle border border-gray-300 border-solid' type="text" value="1" />
            <span class=" text-[26px] plus w-[40px] h-full bg-[#f2f2f2] border border-solid inline-block align-middle text-center">+</span>
          </div>
          <div className='mt-5'>
            <button type="button" class="w-[190px] flex text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 justify-center"><AiOutlineShoppingCart className='text-[20px] mr-1' />ADD TO CART</button>
          </div>
        </div>

      </div>
      <div className='mt-10 w-full px-14'>
        <span className='uppercase font-bold text-black'>similar product:</span>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-5 px-5 py-5 w-full'>
          <Link to='/detail'>
            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
              <img src={images.table} className='h-[300px] rounded-3xl hover:scale-[1.2]' />
              <div className='flex justify-between pt-1'>
                <p className=''>TABLE</p>
                <span className=''>25$</span>
              </div>
              <div className='justify-between flex px-1 text-[15px] mt-5'>
                <button type="button" class="justify-center flex w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "><AiOutlineShoppingCart className='text-[20px] mr-1' />ADD TO CART</button>
              </div>
            </div>
          </Link>
          <Link to='/detail'>
            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
              <img src={images.table} className='h-[300px] rounded-3xl hover:scale-[1.2]' />
              <div className='flex justify-between pt-1'>
                <p className=''>TABLE</p>
                <span className=''>25$</span>
              </div>
              <div className='justify-between flex px-1 text-[15px] mt-5'>
                <button type="button" class="flex justify-center w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "><AiOutlineShoppingCart className='text-[20px] mr-1' />ADD TO CART</button>
              </div>
            </div>
          </Link>
          <Link to='/detail'>
            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
              <img src={images.table} className='flex h-[300px] rounded-3xl hover:scale-[1.2]' />
              <div className='flex justify-between pt-1'>
                <p className=''>TABLE</p>
                <span className=''>25$</span>
              </div>
              <div className='justify-between flex px-1 text-[15px] mt-5'>
                <button type="button" class="flex justify-center w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "><AiOutlineShoppingCart className='text-[20px] mr-1' />ADD TO CART</button>
              </div>
            </div>
          </Link>
          <Link to='/detail'>
            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
              <img src={images.table} className='flex h-[300px] rounded-3xl hover:scale-[1.2]' />
              <div className='flex justify-between pt-1'>
                <p className=''>TABLE</p>
                <span className=''>25$</span>
              </div>
              <div className='justify-between flex px-1 text-[15px] mt-5'>
                <button type="button" class="flex w-full justify-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "><AiOutlineShoppingCart className='text-[20px] mr-1' />ADD TO CART</button>
              </div>
            </div>
          </Link>
          <Link to='/detail'>
            <div className='max-w-[240px] max-h-[500px] mb-10 text-center'>
              <img src={images.table} className='h-[300px] rounded-3xl hover:scale-[1.2]' />
              <div className='flex justify-between pt-1'>
                <p className=''>TABLE</p>
                <span className=''>25$</span>
              </div>
              <div className='justify-between flex px-1 text-[15px] mt-5'>
                <button type="button" class="flex w-full justify-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "><AiOutlineShoppingCart className='text-[20px] mr-1' />ADD TO CART</button>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductDetail