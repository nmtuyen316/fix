import { getLocalData, saveLocalData } from "../../utils/localStorage";
import * as types from "./actionType";
const initialState = {
  isAuth: getLocalData("token") ? true : false,
  token: getLocalData("token") || "",
  profileData:[],
  RegisterUser: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_R:
      return { ...state, isLoading: true, isError: false };

    case types.REGISTER_S:
      return { ...state, isLoading: false, RegisterUser: payload };
    case types.REGISTER_F:
      return { ...state, isLoading: false, isError: true };

    case types.LOGIN_R:
      return { ...state, isLoading: true, isError: false };
    case types.LOGIN_S:
      saveLocalData("token", payload);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
      };
    case types.LOGIN_F:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
        token: "",
      };
    case types.PROFILE_S: {
      return {
        ...state,
        profileData: payload,
      };
    }
    case types.PROFILE_F: {
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      return {
      ...state,
      isLoading: false,
      isAuth: false,
      isError: true,
      profileData: [],
      token: "",
    }}
    case types.LOGOUT_S:{
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
      return{
        ...state,
        isLoading:false,
        isAuth:false,
        profileData:[],
        token:""
      }
    }
    case types.REFRESH_TOKEN_SECRET:{
      saveLocalData("token",payload)
      return{
        ...state,
        token: payload,
        isAuth: true,
        isError:false
      }
    }
    default:
      return state;
  }
};

export { reducer };
