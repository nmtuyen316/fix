import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  const user  = localStorage.getItem('token');
  return user ? <Outlet/> : <Navigate to="/login" />
};