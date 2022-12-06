import axios from 'axios'
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

    await axios.request(reqOptions);
    
}