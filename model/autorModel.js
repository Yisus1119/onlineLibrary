
const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Autor = sequelize.define("Autores", {
    idAutor: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    NombreAutor: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    CorreoAutor: {
        type: Sequelize.STRING,
        allowNull: false,
    },

});

module.exports = Autor;
