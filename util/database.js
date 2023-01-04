const Sequelize = require('sequelize');
const mysql = require("mysql2");

const conexion = mysql.createConnection({ //vamos a crear una conexion manual, para crear nuestra base de datos.
    host: "localhost",
    user: "root",
    password: "toor",
});

conexion.query(
    `CREATE DATABASE IF NOT EXISTS BookApp`,
    function (err, results) {
        console.log(results);
        console.log(err);
    }
);

conexion.end();

const sequelize = new Sequelize("BookApp", "root", "toor", { dialect: "mysql", host: "localhost", port: 3306 });


module.exports = sequelize;