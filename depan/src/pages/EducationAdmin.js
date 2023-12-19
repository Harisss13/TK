import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { useAuth } from "../components/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import placeholderImage from '../img/education1.png';
import Image from '../img/education2.png';
import placeholder from '../img/education3.png';
import Layout from '../admin/Layout';

const EducationAdmin = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const navigate = useNavigate();


  const [educationItems, setEducationItems] = useState([
    { id: 1, title: 'Keagamaan', description: 'Integrasi nilai-nilai keagamaan sebagai landasan moral dan spiritual', image: placeholderImage },
    { id: 2, title: 'Motorik', description: 'Pengembangan keterampilan motorik halus dan kasar', image: Image },
    { id: 3, title: 'Kesenian', description: 'Stimulasi kreativitas anak melalui kegiatan seni', image: placeholder },
  ]);

  const [newEducationItem, setNewEducationItem] = useState({
    title: '',
    description: '',
    image: null,
  });

  const onDrop = (acceptedFiles) => {
    const image = acceptedFiles[0];
    setNewEducationItem({ ...newEducationItem, image });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  const handleAddEducationItem = () => {
    setEducationItems([...educationItems, { ...newEducationItem, id: educationItems.length + 1 }]);
    setNewEducationItem({ title: '', description: '', image: null });
  };

  const handleDeleteEducationItem = (id) => {
    const updatedEducationItems = educationItems.filter((item) => item.id !== id);
    setEducationItems(updatedEducationItems);
  };

  if (isLoggedIn) {
    return (
      <Layout>
            <div className="admin-container">
        <h1>Mengelola Edukasi</h1>

        <div style={{ textAlign: 'left' }}>
          <Link to="/admin">
            <Button variant="secondary" className="primary-kembali rounded-2" style={{ fontSize: '18px', width: 'fit-content' }}>
              Kembali
            </Button>
          </Link>
        </div>

        <div className="admin-education-container">
          {educationItems.map((item) => (
            <Card key={item.id} className="education-card">
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={item.image || placeholderImage} alt="education-img" />
              <Button variant="danger" onClick={() => handleDeleteEducationItem(item.id)}>
                  Delete
                </Button>
            </Card>
          ))}
        </div>
        <div className="admin-add-education">
          <h2>Tambah Item Edukasi Baru</h2>
          <input
            type="text"
            placeholder="Judul"
            value={newEducationItem.title}
            onChange={(e) => setNewEducationItem({ ...newEducationItem, title: e.target.value })}
          />
          <textarea
            placeholder="Deskripsi"
            value={newEducationItem.description}
            onChange={(e) => setNewEducationItem({ ...newEducationItem, description: e.target.value })}
          />
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Tarik dan letakkan gambar di sini, atau klik untuk memilih gambar</p>
          </div>
          {newEducationItem.image && (
            <img src={URL.createObjectURL(newEducationItem.image)} alt="uploaded" className="uploaded-image" />
          )}
          <Button variant="success" onClick={handleAddEducationItem}>
            Tambah Item Edukasi
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

export default EducationAdmin;
