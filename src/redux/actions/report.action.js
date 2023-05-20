import { CREATE_REPORT_FAILURE, CREATE_REPORT_REQUEST, CREATE_REPORT_SUCCESS } from '../../constants'
import axiosAdminClient from '../../apis'

export const createReport = (formData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_REPORT_REQUEST })
    const { data } = await axiosAdminClient.post('/report', formData)
    dispatch({ type: CREATE_REPORT_SUCCESS, payload: data.metadata })
  } catch (error) {
    dispatch({ type: CREATE_REPORT_FAILURE, payload: error?.response?.data?.message || 'create report  error' })
  }
}