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
    no, name, imageURL, faculty, major ,reserve
    } = req.body;
  const studentId = Number.parseInt(req.params.id);
  const student = data.find((student) => student.id === studentId);

  student.no = no;
  student.name = name;
  student.imageURL = imageURL;
  student.faculty = faculty;
  student.major = major;
  student.reserve = reserve;

  res.json(student);
});

// router.delete('/:id', (req, res) => {
//   try {
//     const studentId = Number.parseInt(req.params.id);
//     const studentIndex = data.findIndex(student => student.id === studentId);
//     data.splice(studentIndex, 1);
//     res.sendStatus(204);
//   }
//   catch (err) {console.error(err);}
// });


// const x = data.find(item => item.id === 4)
// const y = {
//   ...x,
//   rooms : [
//     ...x.rooms,
//      { id: 10, floor:4, roomNo: '404', numMax:2, numStudent:0},
//   ]
//   ...x,
//   room : [
//     ...x.rooms.filter(item => item.id !== 7)
//   ]
// }




module.exports = router;