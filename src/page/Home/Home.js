import React from 'react'
import Header from '../../components/Header/Header'
import HomePage from '../../components/Home Page/HomePage.jsx'
import RecentBlog from '../../components/Recent Blog/RecentBlog.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import AboutUs from '../../components/About Us/AboutUs'
import { useLocation } from 'react-router-dom'


const Home = () => {
  const location = useLocation()
  return (
    <div className=''>
      <Header />
      <HomePage />
      <AboutUs />
      <RecentBlog />
      <Footer />
    </div>
  )
}

export default Home