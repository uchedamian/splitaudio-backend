const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Device = sequelize.define("Device", {
  name: DataTypes.STRING,
  type: DataTypes.STRING,
  status: DataTypes.STRING
});

module.exports = Device;
