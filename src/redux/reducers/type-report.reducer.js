import {
  CLEAR_GET_ALL_REPORT_TYPE,
  GET_ALL_REPORT_TYPE_ERROR,
  GET_ALL_REPORT_TYPE_REQUEST,
  GET_ALL_REPORT_TYPE_SUCCESS,
} from '../../constants'

export const getReportTypesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_REPORT_TYPE_REQUEST:
      return {
        loading: true,
        error: null,
        report_types: null,
      }
    case GET_ALL_REPORT_TYPE_SUCCESS:
      return {
        loading: false,
        error: null,
        report_types: action.payload,
      }
    case GET_ALL_REPORT_TYPE_ERROR:
      return {
        loading: false,
        error: action.payload,
        report_types: null,
      }
    case CLEAR_GET_ALL_REPORT_TYPE:
      return {
        ...state,
        error: null,
      }
    default:
      return {
        ...state,
      }
  }
}