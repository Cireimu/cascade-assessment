const express = require("express");
const bcrypt = require("bcryptjs");
const Users = require("../models/userModel");
const Events = require("../models/eventModel");
const db = require("../database/db-config");
const jwt = require("jsonwebtoken");
const router = express.Router();

const {
  registerRequirements,
  checkForDuplicates,
  loginRequirements,
} = require("../middleware/usersMiddleware");

router.post(
  "/register",
  checkForDuplicates,
  registerRequirements,
  (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    const token = signToken(user);

    Users.add(user)
      .then((saved) => {
        res.status(201).json({
          token: token,
          message: `Successfully registered with ${user.email}`,
        });
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
        const token = signToken(user);
        let event = {
          type: "LOGIN",
          description: "Successful",
          user_id: user.id,
        };
        Events.add(event);
        res.status(200).json({
          token: token,
          message: `Welcome back ${user.email}!`,
        });
      } else {
        failed_login_event = {
          type: "LOGIN",
          description: "Failure",
          user_id: user.id,
        };
        Events.add(failed_login_event);
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

function signToken(user) {
  const payload = {
    username: user.email,
  };

  const secret = process.env.JWT_SECRET || "super secret code";

  const options = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
