import {
  GET_ALL_CATEGORY_POST_FAILURE,
  GET_ALL_CATEGORY_POST_REQUEST,
  GET_ALL_CATEGORY_POST_SUCCESS,
} from '../../constants'
import axiosAdminClient from '../../apis'

export const getAllCategoriesPost = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_CATEGORY_POST_REQUEST })
    const { data } = await axiosAdminClient.get('/categories-post')
    dispatch({ type: GET_ALL_CATEGORY_POST_SUCCESS, payload: data.metadata })
  } catch (error) {
    dispatch({ type: GET_ALL_CATEGORY_POST_FAILURE, payload: error?.response?.data?.message | 'create post error' })
  }
}