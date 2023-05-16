import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer.jsx'
import images from '../../constants/images'
const ProductDetail = () => {
  return (
    <div>
      <Header />
      <div className='grid grid-cols-1 md:grid-cols-2 px-14 justify-between'>
        <div className='flex flex-col'>
          <div>
            <img src={images.sofa} />
          </div>
          <div className='flex flex-row'>
            <img src={images.sofa1} />
            <img src={images.sofa2} />
          </div>
        </div>
        <div>
          <p>Sofa</p>
          <p>35$</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductDetail