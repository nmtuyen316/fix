import axios from "axios";
// import { useEffect,useState } from "react";
// export default async function Logout(){

// let headersList = {
//  "Accept": "*/*",
//  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
//  "token": "Bearer " + localStorage.getItem('token')
// }

// let reqOptions = {
//   url: "http://localhost:5000/api/auth/logout",
//   method: "POST",
//   headers: headersList,
// }

// let response = await axios.request(reqOptions);
// console.log(response.data);

//     localStorage.removeItem('user');
//     localStorage.removeItem('token');
//     window.location.assign('/login');
// }
export default async function Logout() {

let headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "token": "Bearer "+localStorage.getItem('token') 
}

let reqOptions = {
  url: "http://localhost:5000/api/auth/logout",
  method: "POST",
  headers: headersList,
}

await axios.request(reqOptions);
localStorage.clear();
window.location.assign('/login');
}

// export default async function LogOut() {
//       await axios("http://localhost:5000/api/auth/logout", { method: "POST",Headers:`Bearer ${localStorage.getItem('token')}`});
  
//       // remove token from local storage and redirect to login page 
//       localStorage.setItem('token', null);
//       window.location = 'http://localhost:3000/login'
// }