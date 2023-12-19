import express from "express";
import {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct,
    saveProducts3,
    saveAktiv,
    getAktiv,
    getAktivById,
    deleteAktiv,
    updateAktiv
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



// LOGIN
// router.post('/loginadmin', loginAdmin);


export default router;