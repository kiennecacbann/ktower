import MainLayout from '../../layout/MainLayout'
import { Link, useNavigate, useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import { getUtil } from '../../redux/actions/utils.action'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/Loading'
import imageDefault from '../../assets/avatar-default.gif'
import { parseTime } from '../../utils'
import { getAllCategoriesPost } from '../../redux/actions/categories-post.action'
import toast from 'react-hot-toast'
import { CLEAR_ALL_CATEGORY_POST, CLEAR_GET_ALL_CATEGORIES_UTILS, CLEAR_GET_UTIL } from '../../constants'
import UtilContainer from '../UtilContainer'
import { getAllCagoriesUtils } from '../../redux/actions/categories-utils.actions'

const UtilDetailPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { loading, error, util } = useSelector(state => state.getUtilReducer)
  const {
    loading: loadingFetchCategoriesUtils,
    error: errorFetchCategoriesUtils,
    categoriesUtils,
  } = useSelector(state => state.getAllCategoriesUtilsReducer)
  const navigate = useNavigate()
  const {
    loading: loadingCategories,
    error: erroCategories,
    categoriesPost,
  } = useSelector(state => state.getCategoriesPostReducer)
  useEffect(() => {
    if (error) {
      toast.error('Error to load utils')
      dispatch({ type: CLEAR_GET_UTIL })
      navigate('/')
    }
    if (erroCategories) {
      toast.error('Error to load utils')
      dispatch({ type: CLEAR_ALL_CATEGORY_POST })
      navigate('/')
    }
    if (errorFetchCategoriesUtils) {
      toast.error('Error to load utils')
      dispatch({ type: CLEAR_GET_ALL_CATEGORIES_UTILS })
      navigate('/')
    }
  }, [error, erroCategories, errorFetchCategoriesUtils])


  useEffect(() => {
    if (id) {
      dispatch(getUtil(id))
      dispatch(getAllCategoriesPost())
      dispatch(getAllCagoriesUtils())
    }
  }, [id])

  return (
    <MainLayout>
      {loading ? <Loading /> : (
        <div className='px-36 pb-5'>
          <div className='w-full bg-gray-100 rounded-[.5rem] px-16 py-4 mt-4 pb-14'>
            <div className='mt-2 mb-2'>
              <h2 className='text-gray-700 font-semibold text-[30px] text-justify'>{util?.title}</h2>
            </div>
            <div className='mt-2 mb-2'>
              <p className='text-gray-400 text-md text-justify'>
                $ {util?.price}
              </p>
            </div>
            {/**Image */}
            <div className=''>
              <img src={util?.images?.url} className='' alt={''} />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: util?.body }}></div>
          </div>
        </div>

      )}
      {loadingCategories ? <Loading /> : (
        <div className='w-full px-36'>
          <h2 className='font-bold text-[40px]'>Category Post</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5 py-5 w-full'>
            {categoriesPost?.length > 0 && categoriesPost.slice(0, 4).map(item => (

              <div className='max-w-[450px] max-h-[470px] cursor-pointer' key={item._id}>
                <img src={item?.thumbnail?.url || imageDefault}
                     className='w-full lg:h-full max-h-[260px] hover:scale-105 rounded-md relative'
                     alt={''} />
                <Link to='/post'>
                  <div className='pb-5 pt-2'>
                    <p>{parseTime(item?.createdAt, '')}</p>
                    <div className='text-[20px] leading-7 font-bold text-black'>{item?.title || 'no title'}
                    </div>
                    <p className={'text-gray-400'}><span className={'text-md text-gray-900 font-semibold'}>{'Author' +
                      ' :'}</span> Admin </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      {loadingFetchCategoriesUtils ? <Loading /> : <UtilContainer data={categoriesUtils} />}

    </MainLayout>
  )
}

export default UtilDetailPage