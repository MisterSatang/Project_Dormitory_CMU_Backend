const express = require('express');
const data = require('../data/adminSetting');

const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.json(data);
    }
    catch (err) {console.error(err);}
});

router.put('/', (req, res) => {
    console.log(data)
  const { isAvailableReserve } = req.body;
  data.isAvailableReserve = isAvailableReserve;

  res.json(data);
});


module.exports = router;