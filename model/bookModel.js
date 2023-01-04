
const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Autor = sequelize.define("Libros", {
    idLibro: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    urlImage: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
    },
    TituloLibro: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    AgeLibro: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    CategoriaLibro: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    AutorLibro: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    NombreEditorial: {
        type: Sequelize.STRING,
        allowNull: false,
    }

});

module.exports = Autor;
