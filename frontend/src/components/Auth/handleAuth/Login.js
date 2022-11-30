import axios from "axios";


export default async function login(username,password){

let headersList = {
 "Accept": "*/*",
 "Content-Type": "application/json" 
}

let bodyContent = JSON.stringify({
  "username":username,
  "password":password
});

let reqOptions = {
  url: "http://localhost:5000/api/auth/login",
  method: "POST",
  headers: headersList,
  data: bodyContent,
}

let response = await axios.request(reqOptions);
window.localStorage.setItem('token',response.data.accessToken);
const {accessToken,...user} = response.data;
window.localStorage.setItem('user',user);
}