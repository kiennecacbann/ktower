import React from 'react'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import RecentBlog from './components/RecentBlog/RecentBlog.jsx'
import Footer from './components/Footer/Footer.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import { useLocation } from 'react-router-dom'
const App = () => {
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

export default App