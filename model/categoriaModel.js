
const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Categoria = sequelize.define("Categoria", {
    idCategoria: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    NombreCategoria: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    DescripcionCategoria: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
    },

});

module.exports = Categoria;
