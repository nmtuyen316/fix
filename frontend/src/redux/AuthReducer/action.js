import axios from "axios";
import { setToast } from "../../components/Other/CheckProperty";
import { saveLocalData } from "../../utils/localStorage";
import * as types from "./actionType";

const register = (payload, toast) => (dispatch) => {
  dispatch({ type: types.REGISTER_R });
  return axios
    .post("http://localhost:5000/api/auth/register", payload)
    .then((r) => {
      console.log(r.data)
      setToast(toast, "Registered Successful", "success");
      dispatch({ type: types.REGISTER_S, payload: r.data });
    })
    .catch((e) => {
      setToast(toast, e.response.data.message, "error");
      dispatch({ type: types.REGISTER_F, payload: e });
      return Promise.reject(e);
    });
};

const login = (payload, toast) => (dispatch) => {
  saveLocalData("userInfo", payload.username)
  dispatch({ type: types.LOGIN_R });
  return axios
    .post("http://localhost:5000/api/auth/login", payload)
    .then((r) => {
      setToast(toast, "Login Successful", "success");
      dispatch({ type: types.LOGIN_S, payload: r.data.accessToken });
    })
    .catch((e) => {
      setToast(toast, e.response.data.message, "error");
      dispatch({ type: types.LOGIN_F, payload: e });
      return Promise.reject(e);
    });
};

const profile = (payload) => (dispatch) => {
  dispatch({ type: types.PROFILE_R });
  const options = {
    method: "GET",
    url: `http://localhost:5000/api/auth/profile/${payload.username}`,
    headers: { token: `Bearer ${payload.token}` },
  };
  return axios(options)
    .then((r) => {
      dispatch({
        type: types.PROFILE_S,
        payload: r.data,
      });
    })
    .catch((e) => dispatch({ type: types.PROFILE_F, payload: e }));
};
const logout = (payload) => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");
  dispatch({ type: types.LOGOUT_R});
  const options = {
    method: "POST",
    url: `http://localhost:5000/api/auth/logout`,
    headers: { token: `Bearer ${payload.token}`},
  };
  return axios(options);
} 

export { login, register, profile,logout };


