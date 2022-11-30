import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import AuthLayout from "./components/Auth/AuthLayout";
import Root from "./components/Root";
import ProtectLayout from "./components/ProtectedLayout"
function App() {
  return (
    <Routes>
      <Route element={<ProtectLayout />}>
        <Route path="/" element={<Root />} exact />
      </Route>
      <Route path="/login" element={<AuthLayout />} />
    </Routes>
  )
}

export default App;
