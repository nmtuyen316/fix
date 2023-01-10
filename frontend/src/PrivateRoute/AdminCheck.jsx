import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AdminCheck = ({ children }) => {
  const location = useLocation();
  const admin = useSelector((store)=>store.AuthReducer.profileData)
  if (!admin.admin) {
    return <Navigate to="/gift" replace state={{ from: location }} />;
  }
  return children;
};

export default AdminCheck;