const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Session = sequelize.define("Session", {
  code: DataTypes.STRING,
  active: { type: DataTypes.BOOLEAN, defaultValue: true }
});

module.exports = Session;
