import {
  CLEAR_ALL_CATEGORY_POST,
  GET_ALL_CATEGORY_POST_FAILURE,
  GET_ALL_CATEGORY_POST_REQUEST,
  GET_ALL_CATEGORY_POST_SUCCESS,
} from '../../constants'

export const getCategoriesPostReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY_POST_REQUEST:
      return {
        loading: true,
        error: null,
        categoriesPost: null,
        success: false,
      }
    case GET_ALL_CATEGORY_POST_SUCCESS:
      return {
        loading: false,
        success: true,
        categoriesPost: action.payload,
        error: null,
      }
    case GET_ALL_CATEGORY_POST_FAILURE:
      return {
        loading: false,
        success: false,
        error: action.payload,
        categoriesPost: null,
      }
    case CLEAR_ALL_CATEGORY_POST:
      return {
        ...state,
        error: null,
        success: false,
      }
    default:
      return { ...state }
  }
}