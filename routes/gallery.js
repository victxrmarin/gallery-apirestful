const data = require("./data.json");
const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/", (req, res) => {
  const newImage = req.body;
  if (!newImage.link) {
    return res.status(400).json({ message: "Data Incompleted" });
  } else {
    data.Images.push(newImage);
    saveData(data);
    return res.status(201).json({ message: "Data completed." });
  }
});

router.get("/", (req, res) => {
  return res.json(data.Images);
});

router.put("/:id", (req, res) => {
  const imageID = parseInt(req.params.id);
  const update = req.body;
  const index = data.Images.findIndex((i) => i.id === imageID);

  if (index == -1) {
    return res.status(404).json({ message: "Image not founded." });
  }

  data.Images[index].title = update.title || data.Images[index].title;
  data.Images[index].link =update.link || data.Images[index].link;
  data.Images[index].date = update.date || data.Images[index].date;

  saveData(db);
  return res.json({ message: "Update sucessfully." });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  data.Images = data.Images.filter((i) => i.id !== id);
  saveData(data);
  return res.status(200).json({ message: "Image deleted." });
});

function saveData() {
  fs.writeFileSync(__dirname + "/data.json", JSON.stringfy(data, null, 2));
}

module.exports = router;
