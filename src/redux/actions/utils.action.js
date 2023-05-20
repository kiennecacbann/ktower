import {
  GET_UTIL_BY_CATEGORY_FAILURE,
  GET_UTIL_BY_CATEGORY_REQUEST,
  GET_UTIL_BY_CATEGORY_SUCCESS,
  GET_UTIL_FAILURE,
  GET_UTIL_REQUEST,
  GET_UTIL_SUCCESS,
  GET_UTILS_FAILURE,
  GET_UTILS_REQUEST,
  GET_UTILS_SUCCESS,
} from '../../constants'
import axiosAdminClient from '../../apis'

export const getUtils = () => async (dispatch) => {
  try {
    dispatch({ type: GET_UTILS_REQUEST })
    const { data } = await axiosAdminClient.get('/util')
    dispatch({ type: GET_UTILS_SUCCESS, payload: data.metadata })
  } catch (error) {
    dispatch({ type: GET_UTILS_FAILURE, payload: error?.response?.data?.message || 'error server internal' })
  }
}

export const getUtil = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_UTIL_REQUEST })
    const { data } = await axiosAdminClient.get(`/util/${id}`)

    dispatch({ type: GET_UTIL_SUCCESS, payload: data.metadata })
  } catch (error) {
    dispatch({ type: GET_UTIL_FAILURE, payload: error?.response?.data?.message || 'error server internal' })
  }
}

export const getUtilsByCategoriesId = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_UTIL_BY_CATEGORY_REQUEST })
    const { data } = await axiosAdminClient.get(`/cateegories-utils/utils/${id}`)
    dispatch({ type: GET_UTIL_BY_CATEGORY_SUCCESS, payload: data.metadata })
  } catch (error) {
    dispatch({ type: GET_UTIL_BY_CATEGORY_FAILURE, payload: error?.response?.data?.message || 'error server internal' })
  }
}