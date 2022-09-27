const express = require('express');
const data = require('../data/adminSetting');

const router = express.Router();

router.put('/', (req, res) => {
    console.log(data)
  const { isAvailableReserve } = req.body;
  data.isAvailableReserve = isAvailableReserve;

  res.json(data);
});


module.exports = router;