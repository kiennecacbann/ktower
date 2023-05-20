import MainLayout from '../../layout/MainLayout'
import BlogContainerById from '../BlogContainerById'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPostsByCategoriesId } from '../../redux/actions/post.action'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
import toast from 'react-hot-toast'
import { CLEAR_POST_BY_CATEGORY } from '../../constants'

const BlogByCategoriesId = () => {
  const dispatch = useDispatch()
  const { error, loading, postsByCategoriesId } = useSelector(state => state.getPostsByCategoriesIdReducer)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
      toast.error('load data error')
      dispatch({ type: CLEAR_POST_BY_CATEGORY })
      navigate('/')
    }
  }, [])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    dispatch(getPostsByCategoriesId(id))
  }, [id])


  return (
    <MainLayout>
      {loading ? <Loading /> : (
        <BlogContainerById data={postsByCategoriesId} />
      )}
    </MainLayout>
  )
}
export default BlogByCategoriesId