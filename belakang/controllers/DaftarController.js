import Daftar from "../models/DaftarModel.js"
import path from "path";
import fs from "fs";
import Daftar2Model from "../models/Daftar2Model.js";
import db from '../config/Database.js'
import LOGIN from "../models/LoginModel.js";


// GET
export const getUsers = async(req, res) =>{
    try {
        const response = await Daftar.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getUserById = async(req, res) =>{
    try {
        const response = await Daftar.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// GET Daftar2
export const getUsers2 = async(req, res) =>{
    try {
        const response = await Daftar2Model.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getUserById2 = async(req, res) =>{
    try {
        const response = await Daftar2Model.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// POST
export const createUser = async(req, res) =>{
    // Daftar FORM
    try {
        await Daftar2Model.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}

// POST daftar2
export const createUser2 = async(req, res) =>{
    // Daftar FORM
    try {
        await Daftar2Model.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}

// UPDATE
export const updateUser = async(req, res) =>{
    try {
        await Daftar2Model.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

// UPDATE daftar 2
export const updateUser2 = async(req, res) =>{
    try {
        await Daftar2Model.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.message);
    }
}


// Delete
export const deleteUser = async(req, res) =>{
    try {
        await Daftar2Model.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}


// Delete daftar2
export const deleteUser2 = async(req, res) =>{
    try {
        await Daftar2Model.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

export const loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    // Query ke database untuk melakukan verifikasi login
    const query = 'SELECT * FROM admintk WHERE username = :username AND password = :password';
    db.query(query, { replacements: { username, password }, type: db.QueryTypes.SELECT })
        .then(results => {
            // Handle the results
            if (results.length > 0) {
                console.log(results);

                // Send a success response
                return res.status(200).json({ success: true, message: 'Login successful' });
            } else {
                console.log('Invalid credentials');
                return res.status(401).json({ success: false, message: 'Invalid credentials' });
            }
        })
        .catch(err => {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        });
};




export const getAdmin = async(req, res) =>{
    try {
        const response = await LOGIN.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}