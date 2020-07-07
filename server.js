const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();
const UserRouter = require("./routers/userRouter");
const EventRouter = require("./routers/eventRouter");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", UserRouter);
server.use("/api/events", EventRouter);
server.use("/", (req, res) => {
  res.status(200).json({ api: "Api is up and running!" });
});

module.exports = server;
