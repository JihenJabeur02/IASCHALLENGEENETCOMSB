// models/Admin.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');

const Cart = sequelize.define('Cart', {
    Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  
}, {
  tableName: 'Cart',
  timestamps: false,
});

module.exports = Cart;