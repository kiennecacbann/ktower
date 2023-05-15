import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CreatePost from '../CreatePost/CreatePost'
import Post from '../Post/Post'
import Posts from '../Post/Posts'
const Blog = () => {
  return (
    <div>
        <Header/>
        <CreatePost />
        <Post/>
        <Footer/>
    </div>
  )
}

export default Blog