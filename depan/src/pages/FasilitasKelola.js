import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import Img1 from '../img/1.png';
import Img2 from '../img/2.jpg';
import Img3 from '../img/3.jpg';
import Img4 from '../img/4.jpg';
import Img5 from '../img/5.jpg';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import Layout from '../admin/Layout';

const FasilitasKelola = () => {

  const { isLoggedIn, login, logout } = useAuth();
  const navigate = useNavigate();

  const [facilities, setFacilities] = useState([
    { id: 1, title: 'Gedung Sekolah', description: 'Tempat berbagai kegiatan pendidikan dan non-pendidikan dijalankan.', image: Img1 },
    { id: 2, title: 'Ruangan Belajar', description: 'Ruangan Belajar adalah tempat nyaman untuk belajar dan bermain.', image: Img2 },
    { id: 3, title: 'Taman Bermain', description: 'Area outdoor dengan permainan yang aman dan mendidik.', image: Img3 },
    { id: 4, title: 'Lapangan Olahraga', description: ' Lapangan Olahraga adalah ruang terbuka untuk kegiatan olahraga dan rekreasi fisik.', image: Img4 },
    { id: 5, title: 'Kantin', description: 'Kantin adalah tempat yang menyediakan makanan untuk anak-anak.', image: Img5 },

  ]);

  const [newFacility, setNewFacility] = useState({
    title: '',
    description: '',
    image: null, // Now image is an object to store the uploaded file
  });

  const onDrop = (acceptedFiles) => {
    const image = acceptedFiles[0];
    setNewFacility({ ...newFacility, image });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  const handleAddFacility = () => {
    setFacilities([...facilities, { ...newFacility, id: facilities.length + 1 }]);
    setNewFacility({ title: '', description: '', image: null });
  };

  const handleDeleteFacility = (id) => {
    const updatedFacilities = facilities.filter((facility) => facility.id !== id);
    setFacilities(updatedFacilities);
  };

  if(isLoggedIn) {
    return (
      <Layout>
            <div className="admin-container">
        <h1>Mengelola Fasilitas</h1>
        <div style={{ textAlign: 'left' }}>
          <Link to="/admin/fasilitas">
            <Button variant="secondary" className="primary-kembali rounded-2" style={{ fontSize: '18px', width: 'fit-content' }}>
              Kembali
            </Button>
          </Link>
        </div>
        <div className="admin-facilities-container">
          {facilities.map((facility) => (
            <Card key={facility.id} className="facility-card">
              <Card.Img variant="top" src={facility.image} alt="facility-img" />
              <Card.Body>
                <Card.Title>{facility.title}</Card.Title>
                <Card.Text>{facility.description}</Card.Text>
                <Button variant="danger" onClick={() => handleDeleteFacility(facility.id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="admin-add-facility">
          <h2>Tambah Fasilitas Baru</h2>
          <input
            type="text"
            placeholder="Judul"
            value={newFacility.title}
            onChange={(e) => setNewFacility({ ...newFacility, title: e.target.value })}
          />
          <textarea
            placeholder="Deskripsi"
            value={newFacility.description}
            onChange={(e) => setNewFacility({ ...newFacility, description: e.target.value })}
          />
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Tarik dan letakkan gambar di sini, atau klik untuk memilih gambar</p>
          </div>
          {newFacility.image && (
            <img src={URL.createObjectURL(newFacility.image)} alt="uploaded" className="uploaded-image" />
          )}
          <Button variant="success" onClick={handleAddFacility}>
            Tambah Fasilitas
          </Button>
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
};

export default FasilitasKelola;
