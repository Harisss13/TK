import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Daftar = db.define('daftar',{
    namaLengkap: DataTypes.STRING,
    gender: DataTypes.STRING,
    NIK: DataTypes.STRING,
    tmpt_lahir: DataTypes.STRING,
    tgl_lahir: DataTypes.DATE,
    agama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    ayah: DataTypes.STRING,
    ibu: DataTypes.STRING,
    no_hp: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Daftar;

(async()=>{
    await db.sync();
})();