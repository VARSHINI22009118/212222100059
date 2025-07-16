const express = require("express");
const router = express.Router();
const { createShortUrl, getStats } = require("../controllers/urlController");

router.post("/shorturls", createShortUrl);
router.get("/shorturls/:shortcode", getStats);

module.exports = router;
