import express from "express";
import {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct,
    saveProducts3,
    loginAdmin,
} from "../controllers/ProductController.js";

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProductById);
router.post('/products', saveProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);


// daftar 2
router.post('/daftar2', saveProducts3);

// LOGIN
// router.post('/loginadmin', loginAdmin);


export default router;