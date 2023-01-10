import axios from 'axios';
import * as types from './actionType';
import JWTaxios from '../../services/api';
import { setToast } from '../../components/Other/CheckProperty';
axios.defaults.withCredentials=true
const createOrder = (payload,toast) => (dispatch) =>{
    dispatch({type: types.ORDER_R});
    const token = localStorage.getItem('token');
    return JWTaxios.post('http://localhost:5000/api/orders',
    {...payload},
    {headers:{token:`Bearer ${token}`}})
    .then((res)=>{
        setToast(toast,"Đặt Quà Thành Công","success");
        dispatch({type:types.ORDER_S,payload: res.data})
    })
    .catch((e)=>{
        setToast(toast,e.response.data.message,"error")
        dispatch({type: types.ORDER_F});
        return Promise.reject(e);
    })
}


export {createOrder};