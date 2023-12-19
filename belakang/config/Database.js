import {Sequelize} from "sequelize";

const db = new Sequelize('kindergarten','root','',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;