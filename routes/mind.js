const express = require("express");
const router = express.Router();
const { getMind } = require("../db/models/leaderboard.js");

router.get("/", async function (req, res) {
  const mind = await getMind();
  res.json({ success: true, payload: mind });
});

module.exports = router;
