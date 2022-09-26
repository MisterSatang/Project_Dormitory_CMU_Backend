const express = require('express');
const data = require('../data/student');

const router = express.Router();

router.get('/', (req, res) => {
    try {
        res.json(data);
    }
    catch (err) {console.error(err);}
});

router.get('/:id', (req, res) => {
  const studentId = Number.parseInt(req.params.id);
  const student = data.find((student) => student.id === studentId);
  res.json(student);
});

let currentstudentId = 2;
router.post('/', (req, res) => {
  const { 
    no, name, imageURL, faculty, major, reserve, statusReserve, buildingNo,roomNo
    } = req.body;
  const student = {
    id: ++currentstudentId,
    no,
    name,
    imageURL,
    faculty,
    major,
    reserve:{
        statusReserve,
        buildingNo,
        roomNo,
    }
  };
  data.push(student);
  res.json(student);
});

// router.put('/:id', (req, res) => {
//   const { name, imageURL, type } = req.body;
//   const studentId = Number.parseInt(req.params.id);
//   const product = data.find((product) => product.id === studentId);

//   product.name = name;
//   product.imageURL = imageURL;
//   product.type = type;

//   res.json(product);
// });

// router.delete('/:id', (req, res) => {
//   const studentId = Number.parseInt(req.params.id);
//   const productIndex = data.findIndex((product) => product.id === studentId);
//   data.splice(productIndex, 1);
//   res.sendStatus(204);
// });


module.exports = router;