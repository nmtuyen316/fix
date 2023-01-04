import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfh1v9JEE_ob_-nxNcdR_8nbPfEWu75Jc",
  authDomain: "eagle-5a0f6.firebaseapp.com",
  projectId: "eagle-5a0f6",
  storageBucket: "eagle-5a0f6.appspot.com",
  messagingSenderId: "761940776286",
  appId: "1:761940776286:web:1b93222bd32b9dcc826bcf",
  measurementId: "G-VYP7RFCLTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes /><br/>
      <Footer />
    </div>
  );
}

export default App;

export const nav = () => {
  return <>navigate("/cart")</>;
};
