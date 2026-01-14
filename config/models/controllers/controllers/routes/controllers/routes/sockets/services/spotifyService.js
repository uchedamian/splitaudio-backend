const axios = require("axios");

const SPOTIFY_API = "https://api.spotify.com/v1";

exports.getUserProfile = async (accessToken) => {
  return axios.get(`${SPOTIFY_API}/me`, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
};

exports.getDevices = async (accessToken) => {
  return axios.get(`${SPOTIFY_API}/me/player/devices`, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
};

exports.play = async (accessToken, deviceId) => {
  return axios.put(
    `${SPOTIFY_API}/me/player/play?device_id=${deviceId}`,
    {},
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
};

exports.pause = async (accessToken) => {
  return axios.put(
    `${SPOTIFY_API}/me/player/pause`,
    {},
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );
};
