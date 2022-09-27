const express = require('express');
const data = require('../data/dormitory');

const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.json(data);
    }
    catch (err) {console.error(err);}
});

router.get('/:id', (req, res) => {
  const dormitoryId = Number.parseInt(req.params.id);
  const dormitory = data.find((dormitory) => dormitory.id === dormitoryId);
  res.json(dormitory);
});

let currentDormitoryId = 4;
router.post('/', (req, res) => {
  const { 
    buildingNo, sex, name
    } = req.body;
  const dormitory = {
    id: ++currentDormitoryId,
    buildingNo,
    sex,
    name,
    rooms:[],
  };
  
  data.push(dormitory);
  res.json(dormitory);
});

router.put('/:id', (req, res) => {
    const { 
        buildingNo, sex, name
    } = req.body;
    const dormitoryId = Number.parseInt(req.params.id);
    const dormitory = data.find((dormitory) => dormitory.id === dormitoryId);

    dormitory.buildingNo = buildingNo;
    dormitory.sex = sex;
    dormitory.name = name;

    res.json(dormitory);
});

router.delete('/:id', (req, res) => {
  try {
    const dormitoryId = Number.parseInt(req.params.id);
    const dormitoryIndex = data.findIndex(dormitory => dormitory.id === dormitoryId);
    data.splice(dormitoryIndex, 1);
    res.sendStatus(204);
  }
  catch (err) {console.error(err);}
});


module.exports = router;