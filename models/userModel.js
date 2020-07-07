const db = require("../database/db-config");

module.exports = {
  add,
  findBy,
  findById,
};

function add(user) {
  return db("users")
    .insert(user)
    .then((ids) => {
      const [id] = ids;
      return findById(id);
    });
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .select("id", "email", "phone_number", "password")
    .first();
}
function findById(id) {
  return db("users").where({ id }).first();
}
