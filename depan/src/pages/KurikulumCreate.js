import { Form, Button } from 'react-bootstrap';
import React, { useState } from "react";
import Layout from '../admin/Layout';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../components/AuthContext';
import axios from 'axios';


const KurikulumCreate = () => {
  const { isLoggedIn, login, logout } = useAuth();

  const [title, setTitle] = useState("");
  const [semester, setSemester] = useState("");
  const [bulan, setBulan] = useState("");


  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");

  const [file2, setFile2] = useState("");
  const [preview2, setPreview2] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const loadImage2 = (e) => {
    const image = e.target.files[0];
    setFile2(image);
    setPreview2(URL.createObjectURL(image));
  };

  const saveKuri = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("semester", semester);
    formData.append("bulan", bulan);
    formData.append("file", file);
    formData.append("file2", file2);
    // formData.append("gender", );
    try {
      await axios.post("http://localhost:4000/kuri", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      alert("Kurikulum telah ditambahkan");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoggedIn) {
    return (
      <Layout>
        <div className="daftar">
          <Link to="/admin/kurikulum">
              <Button variant="secondary" className="primary-kembali rounded-5 btn-sm" style={{ fontSize: '14px', padding: '8px', width: '100px' }}>Kembali</Button>
          </Link>
        <h2 className="formulir fw-bold">Tambah Kurikulum</h2>
      <Form onSubmit={saveKuri}>

        <Form.Group className="mb-3" controlId="theme">
          <Form.Label>Tema</Form.Label>
          <Form.Control type="text" placeholder="Masukan Tema" 
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="smt">
          <Form.Label>Semester</Form.Label>
          <Form.Control type="text" placeholder="Masukan Semester" 
                          value={semester}
                          onChange={(e) => setSemester(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="smt">
          <Form.Label>Bulan</Form.Label>
          <Form.Control type="text" placeholder="Masukan Bulan" 
                          value={bulan}
                          onChange={(e) => setBulan(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Gambar Kegiatan</Form.Label>
          <Form.Control type="file"
          onChange={loadImage}/>
        </Form.Group>

        {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Gambar Kalender</Form.Label>
          <Form.Control type="file" 
          onChange={loadImage2}/>

          {preview2 ? (
            <figure className="image is-128x128">
              <img src={preview2} alt="Preview Image" />
            </figure>
          ) : (
            ""
          )}

        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>

      </Form>
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
  
export default KurikulumCreate;