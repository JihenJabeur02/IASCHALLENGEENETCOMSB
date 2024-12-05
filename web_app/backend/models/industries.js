// models/Admin.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');

const Industry = sequelize.define('industries', {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  IndustryName: DataTypes.TEXT,
  IndustryCode: DataTypes.TEXT,
  Email: DataTypes.TEXT,
  Password: DataTypes.TEXT,
  IndustryLocation: DataTypes.TEXT,
  longtitude:DataTypes.TEXT,
  laltitude:DataTypes.TEXT
}, {
  tableName: 'industries',
  timestamps: false,
});

module.exports = Industry;