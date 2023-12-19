import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Kurikulum = db.define('aktivitas',{
    tema: DataTypes.STRING,
    semester: DataTypes.STRING,
    kegiatan: DataTypes.STRING,
    kalender: DataTypes.STRING,
    url: DataTypes.STRING,
    url2: DataTypes.STRING,
},{
    freezeTableName: true
});

export default Kurikulum;

(async()=>{
    await db.sync();
})();