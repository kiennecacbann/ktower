import { GET_ALL_REPORT_TYPE_ERROR, GET_ALL_REPORT_TYPE_REQUEST, GET_ALL_REPORT_TYPE_SUCCESS } from '../../constants'
import axiosAdminClient from '../../apis'

export const getReportTypes = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_REPORT_TYPE_REQUEST })
    const { data } = await axiosAdminClient.get('/report-type')
    dispatch({
      type: GET_ALL_REPORT_TYPE_SUCCESS,
      payload: data.metadata,
    })
  } catch (error) {
    dispatch({
      type: GET_ALL_REPORT_TYPE_ERROR,
      // @ts-ignore
      payload: error?.response?.data?.message,
    })
  }
}
