import {
  GET_ALL_CATEGORIES_UTILS_ERROR,
  GET_ALL_CATEGORIES_UTILS_REQUEST,
  GET_ALL_CATEGORIES_UTILS_SUCCESS,
  GET_CATEGORIES_UTIL_ERROR,
  GET_CATEGORIES_UTIL_REQUEST,
  GET_CATEGORIES_UTIL_SUCCESS,
  GET_UTILS_BY_CATEGORIES_ERROR,
  GET_UTILS_BY_CATEGORIES_REQUEST,
  GET_UTILS_BY_CATEGORIES_SUCCESS,
} from '../../constants'
import axiosAdminClient from '../../apis'

export const getUtilByCategories =
  (id: string) => async (dispatch) => {
    try {
      dispatch({ type: GET_UTILS_BY_CATEGORIES_REQUEST })
      const { data } = await axiosAdminClient.get(
        `/cateegories-utils/utils/${id}`,
      )
      dispatch({
        type: GET_UTILS_BY_CATEGORIES_SUCCESS,
        payload: data.metadata,
      })
    } catch (error) {
      dispatch({
        type: GET_UTILS_BY_CATEGORIES_ERROR,
        // @ts-ignore
        payload: error?.response?.data?.message || 'server có lỗi',
      })
    }
  }

export const getAllCagoriesUtils = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_CATEGORIES_UTILS_REQUEST })
    const { data } = await axiosAdminClient.get('/cateegories-utils/')
    dispatch({
      type: GET_ALL_CATEGORIES_UTILS_SUCCESS,
      payload: data.metadata,
    })
  } catch (error) {
    dispatch({
      type: GET_ALL_CATEGORIES_UTILS_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || 'server có lỗi',
    })
  }
}

export const getCategoriesUtil = (id: string) => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORIES_UTIL_REQUEST })
    const { data } = await axiosAdminClient.get(`/cateegories-utils/${id}`)
    dispatch({ type: GET_CATEGORIES_UTIL_SUCCESS, payload: data.metadata })
  } catch (error) {
    dispatch({
      type: GET_CATEGORIES_UTIL_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message || 'server có lỗi',
    })
  }
}