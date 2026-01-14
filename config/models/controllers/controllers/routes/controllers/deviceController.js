const { Device } = require("../models");

exports.create = async (req, res) => {
  const device = await Device.create({ ...req.body, UserId: req.user.id });
  res.json(device);
};
