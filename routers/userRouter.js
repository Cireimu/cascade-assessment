const express = require("express");
const bcrypt = require("bcryptjs");
const Users = require("../models/userModel");
const db = require("../database/db-config");
const router = express.Router();

router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  Users.add(user)
    .then((saved_user) => {
      res
        .status(201)
        .json({ message: `Successfully registered with ${user.email}` });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
