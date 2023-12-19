import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
// import '../dist/css/galeriadmin.css';
import img1 from '../img/activities1.png';
import img2 from '../img/activities2.png';
import img3 from '../img/activities3.png';
import img4 from '../img/activities4.png';
import img5 from '../img/activities5.png';
import img6 from '../img/31.jpg';
import img7 from '../img/32.jpg';
import img8 from '../img/33.jpg';
import img9 from '../img/34.jpg';
import img10 from '../img/35.jpg';
import img11 from '../img/36.jpg';
import img12 from '../img/37.jpg';
import img13 from '../img/38.jpg';
import img14 from '../img/39.jpg';
import img15 from '../img/40.jpg';
import img16 from '../img/41.jpg';
import img17 from '../img/42.jpg';
import img18 from '../img/43.jpg';
import Layout from '../admin/Layout';
import { useAuth } from '../components/AuthContext';
import { useNavigate, Link } from 'react-router-dom';


const GaleriAdmin = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const navigate = useNavigate();

 const images = [
  { url: img1 , caption: 'Kegiatan di dalam Kelas' },
  { url: img2 , caption: 'Olahraga Pagi' },
  { url: img3 , caption: 'Mewarnai' },
  { url: img4 , caption: 'Pramuka' },
  { url: img5 , caption: 'Wisuda' },
  { url: img6 , caption: 'Membuat Karya' },
  { url: img7 , caption: 'Belajar Di Kelas' },
  { url: img8 , caption: 'Menggambar' },
  { url: img9 , caption: 'Menanam Pohon' },
  { url: img10 , caption: 'Membuat Karya' },
  { url: img11 , caption: 'Olahraga ' },
  { url: img12 , caption: 'Penyuluhan Orang Tua Siswa' },
  { url: img13 , caption: 'Bermain Balok' },
  { url: img14 , caption: 'Bermain Bersama' },
  { url: img15 , caption: 'Hari Guru' },
  { url: img16 , caption: 'Mengukur tinggi Badan' },
  { url: img17 , caption: 'Bermain Bersama' },
  { url: img18 , caption: 'Melukis' },
    // Tambahkan gambar lain disini
 ];

 const [gallery, setGallery] = useState(images);
 const [selectedFile, setSelectedFile] = useState(null);
 const [url, setUrl] = useState('');
 const [nama, setNama] = useState('');
 const [edit,setEdit] = useState('');
 const [index,setIndex] = useState('');

 const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg',
    onDrop: (acceptedFiles) => {
      setSelectedFile(acceptedFiles[0]);
      setUrl(URL.createObjectURL(acceptedFiles[0]));
    },
 });

 const handleAdd = async (e) => {
    e.preventDefault();
    const newFoto = { nama, url: url };
    setGallery([...gallery, newFoto]);
    setNama('');
    setSelectedFile(null);
    setUrl('');
 };

 const handleEditGallery = (index) => {
  setEdit(true);
  setIndex(index);
  setNama(gallery[index].nama);
  setUrl(gallery[index].url);
};

 const handleDelete = (index) => {
    const newGallery = [...gallery];
    newGallery.splice(index, 1);
    setGallery(newGallery);
 };

 if(isLoggedIn) {
   return (
    <Layout>
    <div className="container mt-5">
      <div className="row">
        {gallery.map((image, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card">
              <img className="card-img-top img-fluid" src={image.url} alt={image.caption} />
              <div className="card-body">
                <h5 className="card-title">{image.caption}</h5>
                <button
                  className="btn btn-warning mr-2"
                  onClick={() => handleEditGallery(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form type="file" onSubmit={handleAdd} className="mt-3">
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Caption"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <button type="submit" className="btn btn-primary">
              Tambah
            </button>
          </div>
        </div>
      </form>
      <div {...getRootProps()} className="galeri-upload mt-3">
        <input {...getInputProps()} />
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

export default GaleriAdmin;