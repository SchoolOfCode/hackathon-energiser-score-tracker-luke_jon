const express = require("express");
const router = express.Router();
const { getTotal } = require("../db/models/leaderboard.js");

router.get("/", async function (req, res) {
  const total = await getTotal();
  res.json({ success: true, payload: total });
});

module.exports = router;

