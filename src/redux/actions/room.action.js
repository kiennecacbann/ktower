import { GET_ALL_ROOM_ME_ERROR, GET_ALL_ROOM_ME_REQUEST, GET_ALL_ROOM_ME_SUCCESS } from '../../constants'
import axiosAdminClient from '../../apis'

export const getRoomMe = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_ROOM_ME_REQUEST,
    })
    const { data } = await axiosAdminClient.get('/room/me')
    dispatch({
      type: GET_ALL_ROOM_ME_SUCCESS,
      payload: data.metadata,
    })
  } catch (error) {
    dispatch({
      type: GET_ALL_ROOM_ME_ERROR,
      payload:
        error?.response?.data?.message || 'Server đang có lỗi!!',
    })
  }
}