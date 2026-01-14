const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
  name: DataTypes.STRING,
  avatar: DataTypes.STRING,
  isGuest: { type: DataTypes.BOOLEAN, defaultValue: false }
});

module.exports = User;
