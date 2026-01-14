const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const c = require("../controllers/spotifyController");

router.get("/devices", auth, c.getDevices);

module.exports = router;
