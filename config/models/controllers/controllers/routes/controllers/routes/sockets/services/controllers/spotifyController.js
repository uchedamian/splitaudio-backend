const spotify = require("../services/spotifyService");

exports.getDevices = async (req, res) => {
  try {
    const data = await spotify.getDevices(req.user.spotifyToken);
    res.json(data.data);
  } catch {
    res.status(400).json({ error: "Spotify device fetch failed" });
  }
};
