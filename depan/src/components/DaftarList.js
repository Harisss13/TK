import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Layout from "../admin/Layout";


function DaftarList() {
  const { isLoggedIn, login, logout } = useAuth();

  const [users, setUser] = useState([]);
  const navigate = useNavigate();
  
  
  // GET START
  useEffect(() => {
    getUsers2();
  }, []);

  const getUsers2 = async () => {
    const response = await axios.get("http://localhost:4000/daftar2");
    setUser(response.data);
  };
  // GET END

  // DELETE START
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/daftar2/${id}`);
      getUsers2();
    } catch (error) {
      console.log(error);
    }
  };
  // DELETE END

  const keluar = () => {
    logout();
  };

  if(isLoggedIn) {

  return (
    <Layout>
      <div className="columns mt-5">
      <div className="column p-5">
        <Link to={`add`} className="button is-success">
          Add New
        </Link>
        <button className="button is-small is-danger" onClick={keluar}>Logout</button>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Jenis Kelamin</th>
              <th>NIK</th>
              <th>Tempat Lahir</th>
              <th>Tanggal Lahir</th>
              <th>Agama</th>
              <th>Alamat</th>
              <th>Ayah</th>
              <th>Ibu</th>
              <th>No HP</th>
              <th>Berkas</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.namaLengkap}</td>
                <td>{user.gender}</td>
                <td>{user.NIK}</td>
                <td>{user.tmpt_lahir}</td>
                <td>{user.tgl_lahir}</td>
                <td>{user.agama}</td>
                <td>{user.alamat}</td>
                <td>{user.ayah}</td>
                <td>{user.ibu}</td>
                <td>{user.no_hp}</td>
                <td>
                  <img src={user.url}/>
                </td>
                <td>
                  <Link
                    to={`edit/${user.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
    
    )
  } else {
    alert("Login terlebih dahulu");
    // console.log(setLoggedin);
    navigate('/login');
    
  }
}

export default DaftarList