import {
  CLEAR_ERRORS,
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS
} from "../../constants";
import axiosAdminClient from "../../apis";

export const login =
  (email, password) => async (dispatch) => {
    try {
      dispatch({type: LOGIN_REQUEST});

      const {data} = await axiosAdminClient.post("/users/login", {
        email,
        password,
      });

      dispatch({type: LOGIN_SUCCESS, payload: data.user});
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload:
          error?.response?.data?.message || "Server đang có lỗi!!",
      });
    }
  };

export const clearErrors = () => async (dispatch) => {
  dispatch({type: CLEAR_ERRORS});
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({type: LOAD_USER_REQUEST});

    const {data} = await axiosAdminClient.get("/users/me");

    dispatch({type: LOAD_USER_SUCCESS, payload: data.metadata});
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error?.response?.data?.message || "error server inteval",
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axiosAdminClient.get(`/users/logout`);

    dispatch({type: LOGOUT_SUCCESS});
  } catch (error) {
    dispatch({
      type: LOGOUT_FAILURE,
      payload: error?.response?.data?.message || "error server inteval",
    });
  }
};


export const updatePassword = (password) => async (dispatch) => {
  try {
    dispatch({type: UPDATE_PASSWORD_REQUEST});

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        'access-control-allow-origin': 'http://localhost:3000',
      },
      withCredentials: true,
    };

    const {data} = await axiosAdminClient.put(`/users/password/update`, password, config);

    dispatch({type: UPDATE_PASSWORD_SUCCESS, payload: data.success});
  } catch (error) {
    dispatch({type: UPDATE_PASSWORD_FAILURE, payload: error?.response?.data?.message || "error server inteval",});
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({type: FORGOT_PASSWORD_REQUEST});

    const {data} = await axiosAdminClient.post(`/users/forgot-password`, email);

    dispatch({type: FORGOT_PASSWORD_SUCCESS, payload: data.message});
  } catch (error) {
    dispatch({type: FORGOT_PASSWORD_FAILURE, payload: error.response.data.message});
  }
};

export const resetPassword = (token, dataInput) => async (dispatch) => {
  try {
    console.log(dataInput)
    dispatch({type: RESET_PASSWORD_REQUEST});
    const {data} = await axiosAdminClient.post(
      `/users/reset-password/${token}`,
      dataInput,
    );

    dispatch({type: RESET_PASSWORD_SUCCESS, payload: data.success});
  } catch (error) {
    dispatch({type: RESET_PASSWORD_FAILURE, payload: error?.response?.data?.message || "error server inteval"});
  }
};