const moment = require("moment");
exports.up = function (knex) {
  return knex.schema.createTable("events", (tbl) => {
    tbl.increments();
    tbl.string("type").notNullable();
    tbl.string("description");
    tbl
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl.date("created_at").defaultTo(moment().format(`YYYY-MM-DD`));
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("events");
};
