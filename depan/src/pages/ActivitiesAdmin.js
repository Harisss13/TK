import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useAuth } from "../components/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Layout from '../admin/Layout';
import axios from 'axios';



function ActivitiesAdmin() {
  const { isLoggedIn, login, logout } = useAuth();

  // POST Aktivitas
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveAktiv = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    try {
      await axios.post("http://localhost:4000/aktiv", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      alert("Galeri telah ditambahkan");
      window.location.reload();

    } catch (error) {
      console.log(error);
    }
  };

  // GET Aktiv
  const [aktiv, setAktiv] = useState([]);

  useEffect(() => {
    getAktiv();
  }, []);

  const getAktiv = async () => {
    const response = await axios.get("http://localhost:4000/aktiv");
    setAktiv(response.data);
  };

  // delete
  const deleteAktiv = async (aktivId) => {
    try {
      await axios.delete(`http://localhost:4000/aktiv/${aktivId}`);
      getAktiv();
    } catch (error) {
      console.log(error);
    }
  };

  if(isLoggedIn) {
    return (
    <Layout>
      <div className="admin-container">
        <h1>Mengelola Aktivitas</h1>
        <div style={{ textAlign: 'left' }}>
          <Link to="/admin">
            <Button variant="secondary" className="primary-kembali rounded-2" style={{ fontSize: '18px', width: 'fit-content' }}>
              Kembali
            </Button>
          </Link>
        </div>


        <br/>
    <Row className="admin-activities-container">
      {aktiv.map((activity) => (
        <Col key={activity.id} xs={12} md={6} lg={4}>
          <Card className="activity-card text-center">
            <Card.Img variant="top" src={activity.url} alt="activity-img" className="img-fluid" />
            <Card.Body>
              <Card.Title>{activity.name}</Card.Title>
              <Button variant="danger">
                <a onClick={() => deleteAktiv(activity.id)}>
                Delete
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>


            {/* TAMBAH AKTIVITAS */}
        <div className="admin-add-activity">
          <h2 className="fw-bold text-center mt-5 mb-3">Tambah Aktivitas Baru</h2>
          <form onSubmit={saveAktiv}>
          <div className='centered-input'>
            <input
            type="text"
            placeholder="Judul"
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>
          </div>
          
          <div className="field">
            <label className="label">Pilih Gambar</label>
            <div className="control">
              <div className="file d-flex justify-content-center">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                  <span className="file-cta">
                    <span className="file-label">Choose a file...</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}
          <Button className="mb-5" variant="success" type='submit'>
            Tambah Activities
          </Button>
          </form>

        </div>
      </div>
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
}

export default ActivitiesAdmin