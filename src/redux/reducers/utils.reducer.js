import {
  CLEAR_GET_UTIL,
  CLEAR_GET_UTILS,
  CLEAR_UTIL_BY_CATEGORY,
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

export const getUtilssReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_UTILS_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
        utils: null,
      }
    case GET_UTILS_SUCCESS:
      return {
        loading: false,
        success: true,
        utils: action.payload,
        error: null,
      }
    case GET_UTILS_FAILURE:
      return {
        loading: false,
        success: false,
        error: action.payload,
        utils: null,
      }
    case CLEAR_GET_UTILS:
      return {
        ...state,
        error: null,
      }
    default:
      return { ...state }
  }
}

export const getUtilsByCategoriesIdReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_UTIL_BY_CATEGORY_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
        utilsCategoriesId: null,
      }
    case GET_UTIL_BY_CATEGORY_SUCCESS:
      return {
        loading: false,
        success: true,
        utilsCategoriesId: action.payload,
        error: null,
      }
    case GET_UTIL_BY_CATEGORY_FAILURE:
      return {
        loading: false,
        success: false,
        error: action.payload,
        utilsCategoriesId: null,
      }
    case CLEAR_UTIL_BY_CATEGORY:
      return {
        ...state,
        error: null,
      }
    default:
      return { ...state }
  }
}


export const getUtilReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_UTIL_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
        util: null,
      }
    case GET_UTIL_SUCCESS:
      return {
        loading: false,
        success: true,
        util: action.payload,
        error: null,
      }
    case GET_UTIL_FAILURE:
      return {
        loading: false,
        success: false,
        error: action.payload,
        util: null,
      }
    case CLEAR_GET_UTIL:
      return {
        ...state,
        error: null,
      }
    default:
      return { ...state }
  }
}