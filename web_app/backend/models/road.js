const { DataTypes } = require('sequelize');
const sequelize = require('../db/index'); // Import the database connection

const Road = sequelize.define('Road', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    timestamps: false,
});

module.exports = Road;
