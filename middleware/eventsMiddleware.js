module.exports = { validateUserId };

const Users = require("../models/userModel");

function validateUserId(req, res, next) {
  const { id } = req.params;

  Users.findById(id)
    .then((user) => {
      if (user) {
        next();
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) =>
      res.status(500).json({
        errorMessage: "Failed to fetch requested events for user from database",
      })
    );
}
