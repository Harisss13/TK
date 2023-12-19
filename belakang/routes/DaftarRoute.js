import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,    
    getUsers2,
    getUserById2,
    createUser2,
    updateUser2,
    deleteUser2,
    loginAdmin,
    getAdmin,
} from "../controllers/DaftarController.js";

const router = express.Router();

// Form
router.get('/daftar', getUsers);
router.get('/daftar/:id', getUserById);
router.post('/daftar', createUser);
router.patch('/daftar/:id', updateUser);
router.delete('/daftar/:id', deleteUser);

// daftar2
router.get('/daftar2', getUsers2);
router.get('/daftar2/:id', getUserById2);
router.post('/daftar2', createUser2);
router.patch('/daftar2/:id', updateUser2);
router.delete('/daftar2/:id', deleteUser2);

// 
router.get('/loginadmin', getAdmin);
router.post('/loginadmin', loginAdmin);


export default router;