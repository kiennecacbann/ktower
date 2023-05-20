import {
  CLEAR_CREATE_REPORT,
  CREATE_REPORT_FAILURE,
  CREATE_REPORT_REQUEST,
  CREATE_REPORT_SUCCESS,
  RESET_CREATE_REPORT,
} from '../../constants'


export const createReportReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_REPORT_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
        newReport: null,
      }
    case CREATE_REPORT_SUCCESS:
      return {
        loading: false,
        newReport: action.payload,
        error: null,
        success: true,
      }
    case CREATE_REPORT_FAILURE:
      return {
        loading: false,
        error: action.payload,
        newReport: null,
        success: false,
      }
    case CLEAR_CREATE_REPORT:
      return {
        ...state,
        error: null,
      }
    case RESET_CREATE_REPORT:
      return {
        ...state,
        success: false,
        newReport: null,
      }
    default:
      return { ...state }
  }
}