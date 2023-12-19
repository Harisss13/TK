import React, { useEffect } from "react";
import Layout from "./Layout";
import Welcome from "./Welcome";
import { useAuth } from "../components/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/authSlice";

const Dashboard = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const navigate = useNavigate();


//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isError } = useSelector((state) => state.auth);

//   useEffect(() => {
//     dispatch(getMe());
//   }, [dispatch]);

//   useEffect(() => {
//     if (isError) {
//       navigate("/");
//     }
//   }, [isError, navigate]);

if(isLoggedIn) {
    return (
        <Layout>
          <Welcome />
        </Layout>
      );
} else {
    return (
    <div className="d-flex flex-column align-items-center justify-content-center bg-warning display-6 vh-100">
        <h1 className="text-center p-3">Anda harus login terlebih dahulu untuk mengakses halaman ini.</h1>
        <Link to="/login" className="btn btn-primary btn-lg mt-3">Login</Link>
      </div>
    );
}


};

export default Dashboard;