const express = require('express');
const data = require('../data/dormitory');

const router = express.Router();

router.post('/:id', (req, res) => {

    const dormitoryId = Number.parseInt(req.params.id); 
    const dataDormitoryID = data.find(dormitory => dormitory.id === dormitoryId)

    let currentRoomId = dataDormitoryID.rooms.length;
    
    const {
        floor,roomNo,numMax,numStudent
    } = req.body;
    const room = {
        id: ++currentRoomId,
        floor,
        roomNo,
        numMax,
        numStudent,
    };

    dataDormitoryID.rooms.push(room);
    res.json(dataDormitoryID);
});

module.exports = router;