const express = require("express");
const data = require("../data/gallery");

const router = express.Router();

router.get("/:id", (req, res) => {
  const galleryID = Number.parseInt(req.params.id);
  const galleryDormi = data.find((gallery) => gallery.id === galleryID);
  res.json(galleryDormi);
});

module.exports = router;
