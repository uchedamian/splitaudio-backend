const apple = require("../services/appleMusicService");

exports.getToken = (req, res) => {
  const token = apple.generateDeveloperToken();
  res.json({ token });
};
