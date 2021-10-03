exports.up = function (knex) {
    return knex.schema.createTable("developers", function (table) {
      table.increments();
      table.string("nome", 100).notNullable();
      table.char("sexo", 1).notNullable();
      table.integer("idade").notNullable();
      table.string("hobby", 100).notNullable();
      table.date("datanascimento").notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("developers");
  };
  