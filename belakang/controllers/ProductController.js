import Product from "../models/ProductModel.js";
import path from "path";
import fs from "fs";
import Daftar2Model from "../models/Daftar2Model.js";
import LOGIN from "../models/LoginModel.js";
import Aktiv from "../models/AktivitasModel.js";
import Kurikulum from "../models/KurikulumModel.js";
import Fasil from "../models/FasilitasModel.js";



// GET
export const getProducts = async(req, res)=>{
    try {
        const response = await Product.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// GET by id
export const getProductById = async(req, res)=>{
    try {
        const response = await Product.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// POST
export const saveProduct = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const gender = req.body.gender;
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Product.create({name: name, image: fileName, url: url});
            res.status(201).json({msg: "Product Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

// POST untuk pendaftaran

// GAMBARR
export const saveProducts3 = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const gender = req.body.gender;
    const nama = req.body.namaLengkap
    const NIK = req.body.NIK;
    const alamat =req.body.alamat;
    const tmpt_lahir = req.body.tmpt_lahir;
    const tgl_lahir = req.body.tgl_lahir;
    const agama = req.body.agama;
    const ayah = req.body.ayah;
    const ibu = req.body.ibu;
    const no_hp = req.body.no_hp;

    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Daftar2Model.create({
                namaLengkap: nama,
                gender:gender,
                NIK:NIK, 
                agama:agama,
                ayah:ayah, 
                ibu:ibu, 
                tmpt_lahir:tmpt_lahir,
                tgl_lahir:tgl_lahir,
                alamat:alamat, 
                no_hp:no_hp, 
                image: fileName, 
                url: url});
            res.status(201).json({msg: "Product Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}

// UPDATE
export const updateProduct = async(req, res)=>{
    const product = await Product.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    
    try {
        await Product.update({name: name, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Product Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteProduct = async(req, res)=>{
    const product = await Product.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);
        await Product.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Product Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

export const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await LOGIN.findOne({
      where: {
        username: username,
        password: password,
      },
    });

    if (admin) {
      return res.status(200).json({ success: true, message: 'Login successful' });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during admin login:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// POST Aktivitas
export const saveAktiv = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});

    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Aktiv.create({name: name, image: fileName, url: url});
            res.status(201).json({msg: "Product Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}
// GET
export const getAktiv = async(req, res)=>{
    try {
        const response = await Aktiv.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// GET by id
export const getAktivById = async(req, res)=>{
    try {
        const response = await Aktiv.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// DELETE Aktivitas
export const deleteAktiv = async(req, res)=>{
    const product = await Aktiv.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);
        await Aktiv.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Product Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

// UPDATE Aktivitas
export const updateAktiv = async(req, res)=>{
    const product = await Aktiv.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    
    try {
        await Aktiv.update({name: name, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Product Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

// POST Kurikulum
export const saveKuri = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});

    const semester= req.body.semester;
    const name = req.body.title;
    const bulan = req.body.bulan;

    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    const file2 = req.files.file2;
    const fileSize2 = file2.data.length;
    const ext2 = path.extname(file2.name);
    const fileName2 = file2.md5 + ext;
    const url2 = `${req.protocol}://${req.get("host")}/images/${fileName2}`;
    const allowedType2 = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 50000000) return res.status(422).json({msg: "Image must be less than 5 MB"});
    if(fileSize2 > 50000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Kurikulum.create({
                tema: name, semester:semester, bulan: bulan,
                kegiatan: fileName, kalender: fileName2,
                url: url, url2: url2});
            res.status(201).json({msg: "Product Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

    file2.mv(`./public/images/${fileName2}`)

}
// GET
export const getKuri = async(req, res)=>{
    try {
        const response = await Kurikulum.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// GET by id
export const getKuriById = async(req, res)=>{
    try {
        const response = await Kurikulum.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// DELETE Kurikulum
export const deleteKuri = async(req, res)=>{
    const product = await Kurikulum.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);
        await Kurikulum.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Product Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

// UPDATE Aktivitas
export const updateKuri = async(req, res)=>{
    const product = await Kurikulum.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    
    try {
        await Kurikulum.update({name: name, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Product Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

// FASILITAS
export const saveFasil = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});

    const desc = req.body.desc;
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`, async(err)=>{
        if(err) return res.status(500).json({msg: err.message});
        try {
            await Fasil.create({name: name, image: fileName, url: url});
            res.status(201).json({msg: "Product Created Successfuly"});
        } catch (error) {
            console.log(error.message);
        }
    })

}
// GET
export const getFasil = async(req, res)=>{
    try {
        const response = await Fasil.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// GET by id
export const getFasilById = async(req, res)=>{
    try {
        const response = await Fasil.findOne({
            where:{
                id : req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

// DELETE Aktivitas
export const deleteFasil = async(req, res)=>{
    const product = await Fasil.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});

    try {
        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);
        await Fasil.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg: "Product Deleted Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}

// UPDATE Aktivitas
export const updateFasil = async(req, res)=>{
    const product = await Fasil.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!product) return res.status(404).json({msg: "No Data Found"});
    
    let fileName = "";
    if(req.files === null){
        fileName = product.image;
    }else{
        const file = req.files.file;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png','.jpg','.jpeg'];

        if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
        if(fileSize > 5000000) return res.status(422).json({msg: "Image must be less than 5 MB"});

        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err)=>{
            if(err) return res.status(500).json({msg: err.message});
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    
    try {
        await Fasil.update({name: name, image: fileName, url: url},{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Product Updated Successfuly"});
    } catch (error) {
        console.log(error.message);
    }
}