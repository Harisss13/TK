import { Form, Button } from 'react-bootstrap';
import React from 'react';
import Layout from '../admin/Layout';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../components/AuthContext';

const KurikulumCreate = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const navigate = useNavigate();

  if (isLoggedIn) {
    return (
      <Layout>
        <div className="daftar">
          <Link to="/admin/kurikulum">
              <Button variant="secondary" className="primary-kembali rounded-5 btn-sm" style={{ fontSize: '14px', padding: '8px', width: '100px' }}>Kembali</Button>
          </Link>
        <h2 className="formulir fw-bold">Tambah Kurikulum</h2>
      <Form>
        <Form.Group className="mb-3" controlId="theme">
          <Form.Label>Tema</Form.Label>
          <Form.Control type="text" placeholder="Masukan Tema" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="smt">
          <Form.Label>Semester</Form.Label>
          <Form.Control type="text" placeholder="Masukan Semester" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Gambar Kegiatan</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Gambar Kalender</Form.Label>
          <Form.Control type="file" />
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