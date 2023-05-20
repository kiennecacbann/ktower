import MainLayout from '../../layout/MainLayout'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/Loading'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { CLEAR_GET_UTILS } from '../../constants'
import { getUtils } from '../../redux/actions/utils.action'
import UtilAllContainer from '../../components/UtilsAllContainer'


const UtilsPage = () => {
  const dispatch = useDispatch()
  const navagate = useNavigate()
  const { loading, error, utils } = useSelector(state => state.getUtilssReducer)

  useEffect(() => {
    if (error) {
      toast.error('Error load data')
      dispatch({ type: CLEAR_GET_UTILS })
      navagate('/')
    }
  }, [error])

  useEffect(() => {
    dispatch(getUtils())
  }, [])


  return (
    <MainLayout>
      {loading ? <Loading /> : (
        <UtilAllContainer all data={utils} />
      )}
    </MainLayout>
  )
}

export default UtilsPage