import {
  CLEAR_ALL_POST,
  CLEAR_CREATE_BLOG,
  CLEAR_POST,
  CLEAR_POST_BY_CATEGORY,
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

export const createPostReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BLOG_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
        newPost: null,
      }
    case CREATE_BLOG_SUCCESS:
      return {
        loading: false,
        newPost: action.payload,
        error: null,
        success: true,
      }
    case CREATE_BLOG_FAILURE:
      return {
        loading: false,
        error: action.payload,
        newPost: null,
        success: false,
      }
    case CLEAR_CREATE_BLOG:
      return {
        ...state,
        error: null,
      }
    default:
      return { ...state }
  }
}

export const getPostsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_POST_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
        posts: null,
      }
    case GET_ALL_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        posts: action.payload,
        error: null,
      }
    case GET_ALL_POST_FAILURE:
      return {
        loading: false,
        success: false,
        error: action.payload,
        posts: null,
      }
    case CLEAR_ALL_POST:
      return {
        ...state,
        error: null,
      }
    default:
      return { ...state }
  }
}


export const getPostReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POST_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
        post: null,
      }
    case GET_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        post: action.payload,
        error: null,
      }
    case GET_POST_FAILURE:
      return {
        loading: false,
        success: false,
        error: action.payload,
        post: null,
      }
    case CLEAR_POST:
      return {
        ...state,
        error: null,
      }
    default:
      return { ...state }
  }
}


export const getPostsByCategoriesIdReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POST_BY_CATEGORY_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
        postsByCategoriesId: null,
      }
    case GET_POST_BY_CATEGORY_SUCCESS:
      return {
        loading: false,
        postsByCategoriesId: action.payload,
        error: null,
        success: true,
      }
    case GET_POST_BY_CATEGORY_FAILURE:
      return {
        loading: false,
        error: action.payload,
        postsByCategoriesId: null,
        success: false,
      }
    case CLEAR_POST_BY_CATEGORY:
      return {
        ...state,
        error: null,
      }
    default:
      return { ...state }
  }
}