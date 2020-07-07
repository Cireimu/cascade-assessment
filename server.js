const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use("/", (req, res) => {
  res.status(200).json({ api: "Api is up and running!" });
});

module.exports = server;
