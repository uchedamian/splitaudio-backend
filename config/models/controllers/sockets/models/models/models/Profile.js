const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Profile = sequelize.define("Profile", {
  name: DataTypes.STRING,
  settings: DataTypes.JSON
});

module.exports = Profile;
