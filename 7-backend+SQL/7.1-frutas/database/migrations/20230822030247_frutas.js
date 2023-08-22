/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('frutas', (table) =>{
    table.increments('id');
    table.string('nombre').notNullable().unique();
    table.string('descripcion');
    table.integer('cantidad').unsigned().notNullable();
    table.decimal('precio',10,2);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('frutas')
};
