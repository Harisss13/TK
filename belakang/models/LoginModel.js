import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const LOGIN = db.define('admintk',{
    username: DataTypes.STRING,
    password: DataTypes.STRING,

},{
    freezeTableName: true
});

export default LOGIN;

(async()=>{
    await db.sync();
})();