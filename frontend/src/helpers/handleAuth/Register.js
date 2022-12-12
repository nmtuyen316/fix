import axios from 'axios'
import { handleLoginClick } from '../../components/Auth/handleStyleAuth/handleEvent';
export default async function Register(username, password) {

    let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
        "username": username,
        "password": password
    });

    let reqOptions = {
        url: "http://localhost:5000/api/auth/register",
        method: "POST",
        headers: headersList,
        data: bodyContent,
    }
    try {
        const response = await axios.request(reqOptions);
        //hien thi thong bao success
        window.alert(response.data.message)
        //chuyen sang page login
        handleLoginClick();
    } catch (error) {
        window.alert(error.response.data.message)
    }

}