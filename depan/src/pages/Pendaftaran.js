import { Form, Button } from 'react-bootstrap';
import React,{ useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Pendaftaran = () => {

  // FORM START
  const [tgl_lahir, setDate]=useState();
  const [gender, setGender]=useState();
  const [namaLengkap, setName] = useState("");
  const [NIK, setNIK] = useState("");
  const [tmpt_lahir, setTmpt] = useState("");
  const [agama, setAgama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [ayah, setAyah] = useState("");
  const [ibu, setIbu] = useState("");
  const [no_hp, setHP] = useState("");
  // FORM END

  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  // gambar DONE
  const saveProducts3 = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("namaLengkap", title);
    formData.append("gender", gender);
    formData.append("agama", agama);
    formData.append("NIK", NIK);
    formData.append("alamat", alamat);
    formData.append("ayah", ayah);
    formData.append("ibu", ibu);
    formData.append("tmpt_lahir", tmpt_lahir);
    formData.append("tgl_lahir", tgl_lahir);
    formData.append("no_hp", no_hp);

    try {
      await axios.post("http://localhost:4000/daftar2", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      alert("Pendaftaran Berhasil!");
      window.location.reload();

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="form" style={{marginTop: '-20px'}}><br/>
        <div className="daftar" style={{ marginTop: '30px', marginBottom: '30px', backgroundColor: 'white' }}>
      <h2 className="formulir fw-bold" style={{ color: '#E9768F' }}>Formulir Pendaftaran</h2>

    <form className="formulir-daftar mb-5" onSubmit={saveProducts3}>

      {/* NAMA */}
      <Form.Group className="mb-3" controlId="name">
        <Form.Control
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nama"
                required
        />
      </Form.Group>

      {/* JENIS KELAMIN */}

      <Form.Group className="mb-3" controlId="gender">
        <Form.Label>Jenis Kelamin</Form.Label>
        <br /><input type="radio" name="gender" value="Laki-Laki" onChange={e=>setGender(e.target.value)}/> Laki-laki
        <br /><input type="radio" name="gender" value="Perempuan" onChange={e=>setGender(e.target.value)}/> Perempuan
      </Form.Group>


      {/* NIK */}
      <Form.Group className="mb-3" controlId="nik">
        <Form.Control
                type="text"
                className="input"
                value={NIK}
                onChange={(e) => setNIK(e.target.value)}
                placeholder="NIK"
                required
                />
      </Form.Group>

      <Form.Group className="mb-3" controlId="tmpt">
        <Form.Control type="text" 
                  className="input"
                  value={tmpt_lahir}
                  onChange={(e) => setTmpt(e.target.value)}
                  placeholder="Tempat Lahir"
                required
                />
      </Form.Group>

      {/* TGL LAHIR */}
      <div className="main">
        <h6>Tanggal Lahir</h6>
        <input type="date" 
                  className="input"
                  value={tgl_lahir}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Tanggal Lahir"
                required
                />
      </div> <br/>
      

      <Form.Group className="mb-3" controlId="agama">
        <Form.Control type="text" 
                  className="input"
                  value={agama}
                  onChange={(e) => setAgama(e.target.value)}
                  placeholder="Agama"
                required
                />
      </Form.Group>

      <Form.Group className="mb-3" controlId="alamat">
        <Form.Control as="textarea" rows={3} placeholder="Alamat Lengkap"
                  className="input"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                required
                />
      </Form.Group>

      <Form.Group className="mb-3" controlId="nama_ortu">
        <Form.Control type="text" placeholder="Nama Ayah" 
        className="input"
        value={ayah}
        onChange={(e) => setAyah(e.target.value)}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="nama_ortu">
        <Form.Control type="text" placeholder="Nama Ibu" 
        className="input"
        value={ibu}
        onChange={(e) => setIbu(e.target.value)}
        required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="telepon">
        <Form.Control type="text" placeholder="No Telepon"
        className="input"
        value={no_hp}
        onChange={(e) => setHP(e.target.value)} 
        required
        />
      </Form.Group>

      {/* Gambar */}
      <div className="field">
      <label className="label">Foto Akta Kelahiran Peserta Didik</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                    required

                  />
                  <span className="file-cta">
                    <span className="file-label">Upload file</span>
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
<br/>
<br/>
<br/>
<br/>
      <button variant="primary" type="submit" className='button is-success'>Submit</button>
    </form>
    </div><br/>
    </div>
    
  ); 
}
  
export default Pendaftaran;