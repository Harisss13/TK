import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">Menu</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/admin"}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/daftarlist"}>List Pendaftaran</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/aktivitas"}>Aktivitas</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/kurikulum"}>Kurikulum</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/fasilitas"}>Fasilitas</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/profil"}>Profil</NavLink>
          </li>
          <li>
            <NavLink to={"/admin/galeri"}>Galeri</NavLink>
          </li>
        </ul>
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Users
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
