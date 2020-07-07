const db = require("../database/db-config");
const moment = require("moment");
module.exports = {
  add,
  findById,
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
