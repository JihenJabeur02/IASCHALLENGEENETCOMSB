// models/Admin.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');

const requestDetails = sequelize.define('requestDetails', {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  
  productid: DataTypes.TEXT,
  quantityrequested: DataTypes.TEXT, 
  requestid: DataTypes.TEXT
}, 
{
  tableName: 'requestDetails',
  timestamps: false,
});

module.exports = requestDetails;