const data = require("data.json");
const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/", (req, res) => {

})

router.get("/", (req, res) => {
    return res.json(data);
})

router.put("/:id", (req, res) => {

})

router.delete("/:id", (req, res)=> {

});

function saveData() {
    fs.writeFileSync(__dirname + "/data.json", JSON.stringfy(data, null, 2))
}

module.exports = router;