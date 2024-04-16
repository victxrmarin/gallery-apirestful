const express = require("express");
const fs = require("fs");
const dotenv = require("dotenv")
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const gallery = require("./routes/gallery");

const PORT = process.env.PORT || 3000;

const server = express();

server.use(cors());
server.use(express.json());
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

server.listen(PORT, () => {
  console.log("Server is running.");
});

server.use("/gallery", gallery);

