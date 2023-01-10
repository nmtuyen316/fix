import React from "react";
import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";

import DescriptionPage from "../components/Description/DescriptionPage";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import Register from "../Pages/SignUp";
import Checkout from "../Pages/Checkout";
import Authentication from "../PrivateRoute/Authentication";
import MyAccount from "../Pages/MyAccount";
import GiftAdmin from "../Admin/GiftAdmin";
import AdminCheck from "../PrivateRoute/AdminCheck";
import Gift from "../Pages/Gift";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description/:id" element={<DescriptionPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myaccount" element={<MyAccount />} />

        <Route path="/register" element={<Register />} />
        <Route
          path="/gift"
          element={
            <Authentication>
              <Gift />
            </Authentication>
          }
        />
        <Route
          path="/admin/gift"
          element={
            <Authentication>
              <AdminCheck>
                <GiftAdmin />
              </AdminCheck>
            </Authentication>
          }
        />
        <Route
          path="/checkout"
          element={
            <Authentication>
              <Checkout />
            </Authentication>
          }
        />
        {/* <Route
          path="/admin"
          element={
            <Authentication>
              <AdminPage />
            </Authentication>
          }
        /> */}
      </Routes>
    </div>
  );
};

export default AllRoutes;
