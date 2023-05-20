import {
  CLEAR_GET_ALL_CATEGORIES_UTILS,
  CLEAR_GET_CATEGORIES_UTIL,
  CLEAR_UTILS_BY_CATEGORIES_ERROR,
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

export const getAllCategoriesUtilsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES_UTILS_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
        categoriesUtils: null,
      }
    case GET_ALL_CATEGORIES_UTILS_SUCCESS:
      return {
        loading: false,
        success: true,
        categoriesUtils: action.payload,
      }
    case GET_ALL_CATEGORIES_UTILS_ERROR:
      return {
        loading: false,
        error: action.payload,
      }
    case CLEAR_GET_ALL_CATEGORIES_UTILS:
      return {
        ...state,
        error: null,
      }
    default:
      return { ...state }
  }
}

export const getAllUtilsByCategoriesReducer = (
  state = {},
  action,
) => {
  switch (action.type) {
    case GET_UTILS_BY_CATEGORIES_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
        utilsByCategories: null,
      }
    case GET_UTILS_BY_CATEGORIES_SUCCESS:
      return {
        loading: false,
        success: true,
        utilsByCategories: action.payload,
      }
    case GET_UTILS_BY_CATEGORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
      }
    case CLEAR_UTILS_BY_CATEGORIES_ERROR:
      return {
        ...state,
        error: null,
      }
    default:
      return { ...state }
  }
}

export const getCategoriesUtilReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORIES_UTIL_REQUEST:
      return {
        loading: true,
        success: false,
        error: null,
        categoriesUtil: null,
      }
    case GET_CATEGORIES_UTIL_SUCCESS:
      return {
        loading: false,
        success: true,
        categoriesUtil: action.payload,
      }
    case GET_CATEGORIES_UTIL_ERROR:
      return {
        loading: false,
        error: action.payload,
      }
    case CLEAR_GET_CATEGORIES_UTIL:
      return {
        ...state,
        error: null,
      }
    default:
      return { ...state }
  }
}

