import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import '../src/App.css'
import 'react-bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import UserList from "./components/UserList";
// import AddUser from "./components/AddUser";
// import EditUser from "./components/EditUser";

// ADMIN
import ActivitiesAdmin from "./pages/ActivitiesAdmin";
import KurikulumAdmin from "./pages/KurikulumAdmin";
import KurikulumCreate from "./pages/KurikulumCreate";
import KurikulumEdit from "./pages/KurikulumEdit";
import EducationAdmin from "./pages/EducationAdmin";
import FasilitasAdmin from "./pages/FasilitasAdmin";
import TeacherAdmin from "./pages/TeacherAdmin";
import GaleriAdmin from "./pages/GaleriAdmin";
import FasilitasKelola from "./pages/FasilitasKelola";


// USER
import KurikulumDetail from "./pages/KurikulumDetail";
import Pendaftaran from "./pages/Pendaftaran";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Fasilitas from "./pages/Fasilitas";
import Profil from "./pages/Profil";
import GaleriUser from "./pages/GaleriUser";
import NavbarComponent from "./pages/NavbarComponent";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ProductList from "./components/ProductList";
import DaftarList from "./components/DaftarList";
import Login from "./components/Login";
import KurikulumUser from "./pages/KurikulumUser";
import Dashboard from "./admin/Dashboard";

function App() {

  // Tampilan User

    return(
      <BrowserRouter>
      <NavbarComponent/>

      <Routes>

        {/* ADMIN */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<Dashboard/>}/>
        <Route path="/admin/aktivitas" element={<ActivitiesAdmin/>}/>
        <Route path="/admin/kurikulum" element={<KurikulumAdmin/>}/>
        <Route path="/admin/kurikulum/create" element={<KurikulumCreate/>}/>
        <Route path="/admin/kurikulum/edit" element={<KurikulumEdit/>}/>
        <Route path="/admin/fasilitas" element={<FasilitasAdmin/>} />
        <Route path="/admin/fasilitas/kelola" element={<FasilitasKelola/>} />
        <Route path="/admin/daftarlist" element={<DaftarList/>}/>
        {/* <Route path="/admin/profil" element={<EducationAdmin/>}/> */}
        <Route path="/admin/guru" element={<TeacherAdmin/>} />
        <Route path="/admin/galeri" element={<GaleriAdmin/>}/>




        {/* CRUD START */}
        {/* <Route path="/data" element={<UserList/>}/>
        <Route path="/data/add" element={<AddUser/>}/>
        <Route path="/data/edit/:id" element={<EditUser/>}/> */}
        <Route path="/product" element={<ProductList/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/product/edit/:id" element={<EditProduct/>}/>
        {/* CRUD END */}


        {/* USER */}
        <Route path="/kurikulum" element={<KurikulumUser/>}/>
        <Route path="/kurikulum/:id" element={<KurikulumDetail/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="pendaftaran" element={<Pendaftaran/>}/>
        <Route path="fasilitas" element={<Fasilitas/>}/>
        <Route path="galeri" element={<GaleriUser/>}/>
        <Route path="profil" element={<Profil/>}/>

      </Routes>
    </BrowserRouter>
    );
  

}

export default App;
