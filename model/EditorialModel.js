
const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Editorial = sequelize.define("Editorial", {
    idEditorial: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    NombreEditorial: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    TelefonoEditorial: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    PaisEditorial: {
        type: Sequelize.STRING,
        allowNull: false,
    },

});

module.exports = Editorial;