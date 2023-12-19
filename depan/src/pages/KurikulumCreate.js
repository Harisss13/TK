import { Form, Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const KurikulumCreate = () => {
  return (
    <div className="daftar" style={{marginTop:'60px'}}>
        <Link to="/Kurikulum-Admin">
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
  ); 
}
  
export default KurikulumCreate;