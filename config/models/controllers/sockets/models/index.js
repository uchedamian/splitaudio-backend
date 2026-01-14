const sequelize = require("../config/database");

const User = require("./User");
const Device = require("./Device");
const Profile = require("./Profile");
const Session = require("./Session");

User.hasMany(Device);
Device.belongsTo(User);

User.hasMany(Profile);
Profile.belongsTo(User);

User.hasMany(Session);
Session.belongsTo(User);

sequelize.sync();

module.exports = { sequelize, User, Device, Profile, Session };
