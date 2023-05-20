import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import HomePage from '../../components/HomePage/HomePage.jsx'
import RecentBlog from '../../components/RecentBlog/RecentBlog.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import AboutUs from '../../components/AboutUs/AboutUs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { CLEAR_ALL_CATEGORY_POST, CLEAR_ALL_POST, CLEAR_GET_ALL_CATEGORIES_UTILS } from '../../constants'
import Loading from '../../components/Loading'
import { getAllCategoriesPost } from '../../redux/actions/categories-post.action'
import { getPosts } from '../../redux/actions/post.action'
import BlogContainer from '../../container/BlogContainer'
import { getAllCagoriesUtils } from '../../redux/actions/categories-utils.actions'
import UtilContainer from '../../container/UtilContainer'


const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, error, categoriesPost } = useSelector(state => state.getCategoriesPostReducer)
  const { loading: loadingPost, error: errorPosts, posts } = useSelector(state => state.getPostsReducer)
  const {
    loading: loadingFetchCategoriesUtils,
    error: errorFetchCategoriesUtils,
    categoriesUtils,
  } = useSelector(state => state.getAllCategoriesUtilsReducer)

  useEffect(() => {
    if (errorPosts) {
      toast.error('Load posts error')
      dispatch({ type: CLEAR_ALL_CATEGORY_POST })
      navigate('/error500')
    }
  }, [errorPosts])


  useEffect(() => {
    if (error) {
      toast.error('Load categories post error')
      dispatch({ type: CLEAR_ALL_POST })
      navigate('/error500')
    }
    if (errorFetchCategoriesUtils) {
      toast.error('Load categories utils error')
      dispatch({ type: CLEAR_GET_ALL_CATEGORIES_UTILS })
      navigate('/error500')
    }
  }, [error, errorFetchCategoriesUtils])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    dispatch(getAllCategoriesPost())
    dispatch(getPosts())
    dispatch(getAllCagoriesUtils())
  }, [])

  return (
    <div className=''>
      <Header />
      <HomePage />
      <AboutUs />
      {loading ? <Loading /> : <RecentBlog data={categoriesPost} />}
      {loadingPost ? <Loading /> : <BlogContainer data={posts} />}
      {loadingFetchCategoriesUtils ? <Loading /> : <UtilContainer data={categoriesUtils} />}
      <Footer />
    </div>
  )
}

export default Home