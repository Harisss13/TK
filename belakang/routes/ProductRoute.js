import express from "express";
import {
    // Produk
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct,

    // Pendaftaran
    saveProducts3,

    // Aktivitas
    saveAktiv,
    getAktiv,
    getAktivById,
    deleteAktiv,
    updateAktiv,

    // Kurikulum
    saveKuri,
    getKuri,
    getKuriById,
    deleteKuri,
    updateKuri,

    // Fasilitas

    getFasil,
    getFasilById,
    saveFasil,
    updateFasil,
    deleteFasil,
} from "../controllers/ProductController.js";

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', saveProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);


// daftar 2
router.post('/daftar2', saveProducts3);

// Aktivitas
router.get('/aktiv', getAktiv);
router.get('/aktiv/:id', getAktivById);
router.post('/aktiv', saveAktiv);
router.patch('/aktiv/:id', updateAktiv);
router.delete('/aktiv/:id', deleteAktiv);

// Kurikulum
router.get('/kuri', getKuri);
router.get('/kuri/:id', getKuriById);
router.post('/kuri', saveKuri);
router.patch('/kuri/:id', updateKuri);
router.delete('/kuri:id', deleteKuri);


// Fasilitas
router.get('/fasil', getFasil);
router.get('/fasil/:id', getFasilById);
router.post('/fasil', saveFasil);
router.patch('/fasil/:id', updateFasil);
router.delete('/fasil:id', deleteFasil);

// LOGIN
// router.post('/loginadmin', loginAdmin);


export default router;