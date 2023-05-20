import {
  CREATE_BLOG_FAILURE,
  CREATE_BLOG_REQUEST,
  CREATE_BLOG_SUCCESS,
  GET_ALL_POST_FAILURE,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  GET_POST_BY_CATEGORY_FAILURE,
  GET_POST_BY_CATEGORY_REQUEST,
  GET_POST_BY_CATEGORY_SUCCESS,
  GET_POST_FAILURE,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
} from '../../constants'
import axiosAdminClient from '../../apis'

export const createPost = (dataInput) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_BLOG_REQUEST })
    const { data } = await axiosAdminClient.post('/post', dataInput)
    dispatch({ type: CREATE_BLOG_SUCCESS, payload: data.metadata })
  } catch (error) {
    dispatch({ type: CREATE_BLOG_FAILURE, payload: error?.response?.data?.message | 'create post error' })
  }
}


export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_POST_REQUEST })
    const { data } = await axiosAdminClient.get('/post')
    dispatch({ type: GET_ALL_POST_SUCCESS, payload: data.metadata })
  } catch (error) {
    dispatch({ type: GET_ALL_POST_FAILURE, payload: error?.response?.data?.message | 'get posts error' })
  }
}

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_POST_REQUEST })
    const { data } = await axiosAdminClient.get(`/post/${id}`)
    dispatch({ type: GET_POST_SUCCESS, payload: data.metadata })
  } catch (error) {
    dispatch({ type: GET_POST_FAILURE, payload: error?.response?.data?.message | 'get post error' })
  }
}

export const getPostsByCategoriesId = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_POST_BY_CATEGORY_REQUEST })
    const { data } = await axiosAdminClient.get(`/post/categories/${id}`)
    dispatch({ type: GET_POST_BY_CATEGORY_SUCCESS, payload: data.metadata })
  } catch (error) {
    dispatch({ type: GET_POST_BY_CATEGORY_FAILURE, payload: error?.response?.data?.message | 'get post error' })
  }
}