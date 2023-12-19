import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Aktiv = db.define('aktivitas',{
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
},{
    freezeTableName: true
});

export default Aktiv;

(async()=>{
    await db.sync();
})();