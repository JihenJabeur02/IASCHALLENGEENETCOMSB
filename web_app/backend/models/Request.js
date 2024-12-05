// models/Admin.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');

const Request = sequelize.define('request', {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  
  Date: DataTypes.TEXT,
  Price: DataTypes.INTEGER,
  PaymentType: DataTypes.TEXT, 
  Status: DataTypes.TEXT,
  Requester: DataTypes.INTEGER,
  Fulfiller: DataTypes.INTEGER,
  products:DataTypes.JSON
}, 
{
  tableName: 'request',
  timestamps: true,
});

module.exports = Request;