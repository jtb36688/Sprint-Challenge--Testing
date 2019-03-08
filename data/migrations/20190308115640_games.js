exports.up = function(knex, Promise) {
  return knex.schema.createTable("games", column => {
    column.increments();
    column.string("name", 100).notNullable();
    column.string("genre", 100).notNullable();
    column.integer("releaseYear");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("games");
};
