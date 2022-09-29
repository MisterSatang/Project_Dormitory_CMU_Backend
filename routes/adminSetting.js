const express = require("express");
const data = require("../data/adminSetting");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.json(data);
  } catch (err) {
    console.error(err);
  }
});

router.put("/", (req, res) => {
  console.log(data);
  const { disableReserve } = req.body;
  data.disableReserve = disableReserve;

  res.json(data);
});

module.exports = router;
