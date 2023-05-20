import {
  CLEAR_GET_ROOM_ME_TYPE,
  GET_ALL_ROOM_ME_ERROR,
  GET_ALL_ROOM_ME_REQUEST,
  GET_ALL_ROOM_ME_SUCCESS,
} from '../../constants'

export const getRoomMeReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_ROOM_ME_REQUEST:
      return {
        loading: true,
        error: null,
        roomMe: null,
      }
    case GET_ALL_ROOM_ME_SUCCESS:
      return {
        loading: false,
        error: null,
        roomMe: action.payload,
      }
    case GET_ALL_ROOM_ME_ERROR:
      return {
        loading: false,
        error: action.payload,
        roomMe: null,
      }
    case CLEAR_GET_ROOM_ME_TYPE:
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