const db = require("../database/db-config");
const moment = require("moment");
module.exports = {
  add,
  findById,
  add,
  findById,
  findByUser,
  findByType,
  findEventsByWeek,
  findEventsTwoDaysAgo,
};

function add(event) {
  return db("events")
    .insert(event)
    .then((ids) => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db("events").where("events.id", id);
}

function findByUser(user) {
  return db("events").where("events.user_id", user);
}

function findByType(type) {
  return db("events").where("events.description", type);
}

function findEventsByWeek() {
  let todays_date = moment().format("YYYY-MM-DD");
  let last_week = moment().subtract(1, "w").format("YYYY-MM-DD");

  return db("events")
    .where("created_at", "<=", todays_date)
    .where("created_at", ">=", last_week);
}

function findEventsTwoDaysAgo() {
  let two_days_event = moment().subtract(2, "d").format("YYYY-MM-DD");

  return db("events").where("created_at", "=", two_days_event);
}
