import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { Link, useNavigate } from "react-router-dom";
import Image1 from '../img/teacher1.png';
import Image2 from '../img/teacher2.png';
import Image3 from '../img/teacher3.png';
import Image4 from '../img/teacher4.png';
import { useAuth } from '../components/AuthContext';
import Layout from '../admin/Layout';

const TeacherAdmin = () => {

  const { isLoggedIn, login, logout } = useAuth();
  const navigate = useNavigate();

    const [teachers, setTeachers] = useState([
        { id: 1, name: 'Eli', position: 'Guru', image: Image1, facebook: 'https://www.facebook.com/eli.hayati.520', whatsapp: 'https://wa.me/6287897195246', instagram: 'https://www.instagram.com/elitutihayati' },
        { id: 2, name: 'Mita Pratiwi', position: 'Guru', image: Image2, facebook: 'https://www.facebook.com/mitha.a.pratiwii', whatsapp: 'https://wa.me/6289503548357', instagram: 'https://www.instagram.com/mitapra_' },
        { id: 3, name: 'Diva Sofia M.', position: 'Guru', image: Image3, facebook: 'https://www.facebook.com/profile.php?id=100086598393398', whatsapp: 'https://wa.me/6283148931994', instagram: 'https://www.instagram.com/diva6614' },
        { id: 4, name: 'Shallshabilla', position: 'Guru', image: Image4, facebook: 'https://www.facebook.com/mitha.a.pratiwii', whatsapp: 'https://wa.me/6289503548357', instagram: 'https://www.instagram.com/mitapra_' },
      ]);
      

  const [newTeacher, setNewTeacher] = useState({
    name: '',
    position: '',
    image: null,
    facebook: '',
    whatsapp: '',
    instagram: '',
  });

  const onDrop = (acceptedFiles) => {
    const image = acceptedFiles[0];
    setNewTeacher({ ...newTeacher, image });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  const handleAddTeacher = () => {
    setTeachers([...teachers, { ...newTeacher, id: teachers.length + 1 }]);
    setNewTeacher({ name: '', position: '', image: null, facebook: '', whatsapp: '', instagram: '' });
  };

  const handleDeleteTeacher = (id) => {
    const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(updatedTeachers);
  };
  
  if(isLoggedIn) {
    return (
      <Layout>
      <div className="admin-container">
        <h1>Mengelola Profil Guru</h1>
        <div style={{ textAlign: 'left' }}>
          <Link to="/Profil-Admin">
            <Button variant="secondary" className="primary-kembali rounded-2" style={{ fontSize: '18px', width: 'fit-content' }}>
              Kembali
            </Button>
          </Link>
        </div>
        <br/>
        <div className="admin-teachers-container">
          {teachers.map((teacher) => (
            <Card key={teacher.id} className="teacher-card">
              <Card.Img variant="top" src={teacher.image} alt="teacher-img" />
              <Card.Body>
                <Card.Title>{teacher.name}</Card.Title>
                <Card.Text>{teacher.position}</Card.Text>
                <div className="social-icons">
          {teacher.facebook && (
            <a href={teacher.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f" />
            </a>
          )}
          {teacher.whatsapp && (
            <a href={teacher.whatsapp} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp" />
            </a>
          )}
          {teacher.instagram && (
            <a href={teacher.instagram} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
          )}
        </div>
        <h3></h3>
        <Button variant="danger" onClick={() => handleDeleteTeacher(teacher.id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="admin-add-teacher">
          <h2>Tambah Guru Baru</h2>
          <input
            type="text"
            placeholder="Nama"
            value={newTeacher.name}
            onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Jabatan"
            value={newTeacher.position}
            onChange={(e) => setNewTeacher({ ...newTeacher, position: e.target.value })}
          />
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Tarik dan letakkan gambar di sini, atau klik untuk memilih gambar</p>
          </div>
          {newTeacher.image && (
            <img src={URL.createObjectURL(newTeacher.image)} alt="uploaded" className="uploaded-image" />
          )}
          <input
            type="text"
            placeholder="Link Facebook"
            value={newTeacher.facebook}
            onChange={(e) => setNewTeacher({ ...newTeacher, facebook: e.target.value })}
          />
          <input
            type="text"
            placeholder="Link WhatsApp"
            value={newTeacher.whatsapp}
            onChange={(e) => setNewTeacher({ ...newTeacher, whatsapp: e.target.value })}
          />
          <input
            type="text"
            placeholder="Link Instagram"
            value={newTeacher.instagram}
            onChange={(e) => setNewTeacher({ ...newTeacher, instagram: e.target.value })}
          />
          <Button variant="success" onClick={handleAddTeacher}>
            Tambah Guru
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

export default TeacherAdmin;
