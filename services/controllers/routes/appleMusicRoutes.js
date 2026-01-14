const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const c = require("../controllers/appleMusicController");

router.get("/token", auth, c.getToken);

module.exports = router;
