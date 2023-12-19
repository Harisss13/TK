import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import { Link } from 'react-router-dom';
import Image8 from '../img/activities1.png';
import Image9 from '../img/activities2.png';
import Image10 from '../img/activities3.png';
import Image11 from '../img/activities4.png';
import Image12 from '../img/activities5.png';
import Image13 from '../img/activities6.png';

function ActivitiesAdmin() {
  const [activities, setActivities] = useState([
    { id: 1, title: 'Belajar&Bermain', image: Image8 },
    { id: 2, title: 'Olahraga&Bermain', image: Image9 },
    { id: 3, title: 'Membuat Karya', image: Image10 },
    { id: 4, title: 'Pramuka Siaga', image: Image11 },
    { id: 5, title: 'Pelepasan Wisuda', image: Image12 },
    { id: 6, title: 'Simulasi Manasik', image: Image13 },
  ]);

  const [newActivity, setNewActivity] = useState({
    title: '',
    image: null,
  });

  const onDrop = (acceptedFiles) => {
    const image = acceptedFiles[0];
    setNewActivity({ ...newActivity, image });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  const handleAddActivity = () => {
    setActivities([...activities, { ...newActivity, id: activities.length + 1 }]);
    setNewActivity({ title: '', image: null });
  };

  const handleDeleteActivity = (id) => {
    const updatedActivities = activities.filter((activity) => activity.id !== id);
    setActivities(updatedActivities);
  };
  return (
<div className="admin-container">
      <h1>Mengelola Aktivitas</h1>
      <div style={{ textAlign: 'left' }}>
        <Link to="/Profil-Admin">
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
              <Button variant="danger" onClick={() => handleDeleteActivity(activity.id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="admin-add-activity">
        <h2 className="fw-bold text-center mt-5 mb-3">Tambah Aktivitas Baru</h2>
        <input
          type="text"
          placeholder="Judul"
          value={newActivity.title}
          onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
        />
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          <p>Tarik dan letakkan gambar di sini, atau klik untuk memilih gambar</p>
        </div>
        {newActivity.image && (
          <img src={URL.createObjectURL(newActivity.image)} alt="uploaded" className="uploaded-image" />
        )}
        <Button className="mb-5" variant="success" onClick={handleAddActivity}>
          Tambah Activities
        </Button>
      </div>
    </div>
  )
}

export default ActivitiesAdmin