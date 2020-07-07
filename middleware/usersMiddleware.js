module.exports = {
  registerRequirements,
  loginRequirements,
  checkForDuplicates,
};

const Users = require("../models/userModel");

function registerRequirements(req, res, next) {
  const { email, password, phone_number } = req.body;

  if (email && password && phone_number) {
    next();
  } else {
    res.status(400).json({ message: "Please enter all required fields" });
  }
}

function loginRequirements(req, res, next) {
  const { email, password } = req.body;

  if (email && password) {
    next();
  } else {
    res.status(400).json({ message: "Please enter all required fields" });
  }
}

function checkForDuplicates(req, res, next) {
  const { email } = req.body;

  Users.findBy({ email }).then((user) => {
    if (user) {
      res
        .status(400)
        .json({ message: `User with email: ${user.email} already exists` });
    } else {
      next();
    }
  });
}
