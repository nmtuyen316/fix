import JWTaxios from "./api";
import { getLocalData } from "../utils/localStorage";
import { refresh } from "../redux/AuthReducer/action";
import jwt_decode from "jwt-decode"
import axios from "axios";

const setup = async (store) => {
    const { dispatch } = store
    JWTaxios.interceptors.request.use(
        async (config) => {
            console.log('tuyen')
            let date = new Date();
            const token = getLocalData("token");
            if (token) {
                const decode = jwt_decode(token);
                if (decode.exp < date.getTime() / 1000) {
                    const r = await axios.post('http://localhost:5000/api/auth/refresh', {}, {
                        withCredentials: true,
                        headers: {
                            Credential: true
                        }
                    })
                    dispatch(refresh(r.data.accessToken))
                    config.headers["token"] = `Bearer ${r.data.accessToken}`
                }
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
};

export default setup;