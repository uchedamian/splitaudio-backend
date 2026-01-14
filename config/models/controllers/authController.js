const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');
const { User } = require('../models');

exports.register = async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({ ...req.body, password: hash });
  res.json({ token: jwt.sign(user.id) });
};

exports.login = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) return res.status(401).send('Invalid credentials');

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(401).send('Invalid credentials');

  res.json({ token: jwt.sign(user.id) });
};

exports.guest = async (_, res) => {
  const guest = await User.create({ isGuest: true });
  res.json({ token: jwt.sign(guest.id, '24h') });
};
