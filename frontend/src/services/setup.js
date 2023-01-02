import axios from "axios";
import JWTaxios from "./api";
const setup = (store) => {
    JWTaxios.interceptors.request.use(async(config) => {
        await axios.post('http://localhost:5000/api/auth/refresh',{
            
        })
        return config
    }, ((e) => Promise.reject(e)))
}
export default setup