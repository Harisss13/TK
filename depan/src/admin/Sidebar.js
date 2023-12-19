import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useAuth } from "../components/AuthContext";


const Sidebar = () => {

  const { isLoggedIn, login, logout } = useAuth();

  const keluar = () => {
    logout();
  };


  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label" >Menu</p>
        <ul className="menu-list" >
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
          <li>
            <NavLink to={"/admin/guru"}>Guru</NavLink>
          </li>
        </ul>

        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={keluar} className="button is-white">
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
