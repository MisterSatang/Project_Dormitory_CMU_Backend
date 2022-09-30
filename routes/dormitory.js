const express = require("express");
const data = require("../data/dormitory");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const filters = req.query;
    console.log(filters);

    let room = data;
    //localhost:8000/dormitories
    !filters.sex ? null : (room = data.filter((v) => v.id == filters.sex));
    !filters.floor
      ? null
      : (room = room.map((v) => {
          const filteredRoom = v.rooms
            .map((v) => {
              if (v.floor == filters.floor) {
                return v;
              }
            })
            .filter((v) => v != undefined);

          console.log(filteredRoom);
          return {
            ...v,
            rooms: filteredRoom,
          };
        }));
    // const rooms = data.filter((room) => {
    //   let isValid = true;
    //   for()
    // });
    console.log({ room: room.map((v) => v.rooms) });
    console.log(room);
    res.json(room);
  } catch (err) {
    console.error(err);
  }
});

router.get("/:id", (req, res) => {
  const dormitoryId = Number.parseInt(req.params.id);
  const dormitory = data.find((dormitory) => dormitory.id === dormitoryId);
  res.json(dormitory);
});

let currentDormitoryId = 4;
router.post("/", (req, res) => {
  const { buildingNo, floor, sex, name, tel } = req.body;
  const dormitory = {
    id: ++currentDormitoryId,
    buildingNo,
    floor,
    sex,
    name,
    tel,
    rooms: [],
  };

  data.push(dormitory);
  res.json(dormitory);
});

router.put("/:id", (req, res) => {
  const { buildingNo, floor, sex, name, tel } = req.body;
  const dormitoryId = Number.parseInt(req.params.id);
  const dormitory = data.find((dormitory) => dormitory.id === dormitoryId);

  dormitory.buildingNo = buildingNo;
  dormitory.floor = floor;
  dormitory.sex = sex;
  dormitory.name = name;
  dormitory.tel = tel;

  res.json(dormitory);
});

router.delete("/:id", (req, res) => {
  try {
    const dormitoryId = Number.parseInt(req.params.id);
    const dormitoryIndex = data.findIndex(
      (dormitory) => dormitory.id === dormitoryId
    );
    data.splice(dormitoryIndex, 1);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
