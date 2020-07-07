const express = require("express");
const bcrypt = require("bcryptjs");
const Users = require("../models/userModel");
const db = require("../database/db-config");
const router = express.Router();

const {
  registerRequirements,
  loginRequirements,
  checkForDuplicates,
} = require("../middleware/usersMiddleware");

router.post(
  "/register",
  registerRequirements,
  checkForDuplicates,
  (req, res) => {
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
  }
);

router.post("/login", loginRequirements, (req, res) => {
  let { email, password } = req.body;

  Users.findBy({ email })
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: `Welcome back ${user.email}!` });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
