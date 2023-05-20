import MainLayout from '../../layout/MainLayout'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
import toast from 'react-hot-toast'
import { CLEAR_UTIL_BY_CATEGORY } from '../../constants'
import UtilContainerByCategoriesId from '../UtilContainerByCategoriesId'
import { getUtilsByCategoriesId } from '../../redux/actions/utils.action'

const UtilByCategorieId = () => {
  const dispatch = useDispatch()
  const { error, loading, utilsCategoriesId } = useSelector(state => state.getUtilsByCategoriesIdReducer)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
      toast.error('load data error')
      dispatch({ type: CLEAR_UTIL_BY_CATEGORY })
      navigate('/')
    }
  }, [])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    dispatch(getUtilsByCategoriesId(id))
  }, [id])


  return (
    <MainLayout>
      {loading ? <Loading /> : (
        <UtilContainerByCategoriesId data={utilsCategoriesId} />
      )}
    </MainLayout>
  )
}
export default UtilByCategorieId