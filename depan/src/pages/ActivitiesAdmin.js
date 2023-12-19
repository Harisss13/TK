import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { useAuth } from "../components/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Image8 from '../img/activities1.png';
import Image9 from '../img/activities2.png';
import Image10 from '../img/activities3.png';
import Image11 from '../img/activities4.png';
import Image12 from '../img/activities5.png';
import Image13 from '../img/activities6.png';
import Layout from '../admin/Layout';
import axios from 'axios';
// import { getAktiv } from '../../../belakang/controllers/ProductController';

function ActivitiesAdmin() {
  const { isLoggedIn, login, logout } = useAuth();

  const [activities, setActivities] = useState([
    { id: 1, title: 'Belajar&Bermain', image: Image8 },
    { id: 2, title: 'Olahraga&Bermain', image: Image9 },
    { id: 3, title: 'Membuat Karya', image: Image10 },
    { id: 4, title: 'Pramuka Siaga', image: Image11 },
    { id: 5, title: 'Pelepasan Wisuda', image: Image12 },
    { id: 6, title: 'Simulasi Manasik', image: Image13 },
  ]);

  // const [newActivity, setNewActivity] = useState({
  //   title: '',
  //   image: null,
  // });

  // const onDrop = (acceptedFiles) => {
  //   const image = acceptedFiles[0];
  //   setNewActivity({ ...newActivity, image });
  // };

  // const { getRootProps, getInputProps } = useDropzone({
  //   accept: 'image/*',
  //   onDrop,
  // });

  // const handleAddActivity = () => {
  //   setActivities([...activities, { ...newActivity, id: activities.length + 1 }]);
  //   setNewActivity({ title: '', image: null });
  // };

  // const handleDeleteActivity = (id) => {
  //   const updatedActivities = activities.filter((activity) => activity.id !== id);
  //   setActivities(updatedActivities);
  // };

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
      setTitle('');
    } catch (error) {
      console.log(error);
    }
  };

  // GET Aktiv
  // const [aktiv, setAktiv] = useState([]);

  // useEffect(() => {
  //   getAktiv();
  // }, []);

  // const getAktiv = async () => {
  //   const response = await axios.get("http://localhost:4000/aktiv");
  //   setAktiv(response.data);
  // };

  // const deleteAktiv = async (aktivId) => {
  //   try {
  //     await axios.delete(`http://localhost:4000/aktiv/${aktivId}`);
  //     getAktiv();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
        <div className="admin-activities-container">
          {activities.map((activity) => (
            <Card key={activity.id} className="activity-card text-center">
              <Card.Img variant="top" src={activity.image} alt="activity-img" />
              <Card.Body>
                <Card.Title>{activity.title}</Card.Title>
                <Button variant="danger">
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>

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
            <label className="label">Image</label>
            <div className="control">
              <div className="file">
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