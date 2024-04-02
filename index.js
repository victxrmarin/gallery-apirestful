const express = require("express");
const fs = require("fs");
const dotenv = require("dotenv")
const cors = require('cors');

const gallery = require("./routes/gallery");

const PORT = process.env.PORT || 3000;

const server = express();

server.use(cors());
server.use(express.json());
server.listen(PORT, () => {
  console.log("Server is running.");
});

server.use("/gallery", gallery);

