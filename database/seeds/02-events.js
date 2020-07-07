const moment = require("moment");
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("events")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("events").insert([
        {
          id: 1,
          type: "LOGIN",
          description: "Successful",
          user_id: 1,
          created_at: moment().format("YYYY-MM-DD"),
        },
        {
          id: 2,
          type: "LOGIN",
          description: "Successful",
          user_id: 2,
          created_at: moment().format("YYYY-MM-DD"),
        },
        {
          id: 3,
          type: "LOGIN",
          description: "Successful",
          user_id: 3,
          created_at: moment().format("YYYY-MM-DD"),
        },
        {
          id: 4,
          type: "LOGIN",
          description: "Failure",
          user_id: 1,
          created_at: moment().subtract(2, "d").format("YYYY-MM-DD"),
        },
        {
          id: 5,
          type: "LOGIN",
          description: "Successful",
          user_id: 1,
          created_at: moment().format("YYYY-MM-DD"),
        },
        {
          id: 6,
          type: "LOGIN",
          description: "Failure",
          user_id: 3,
          created_at: moment().subtract(2, "d").format("YYYY-MM-DD"),
        },
        {
          id: 7,
          type: "LOGIN",
          description: "Failure",
          user_id: 2,
          created_at: moment().subtract(2, "w").format("YYYY-MM-DD"),
        },
      ]);
    });
};
