/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema.createTable("user", (table) => {
        table.increments("id").primary();
        table.string('firstName',15).notNullable();
        table.string('lastName',15).notNullable();
        table.string('email').notNullable();
        table.integer('bvn').notNullable();
        table.timestamp('date_joined').notNullable();
        table.integer('phone_num', 12).notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
      });
  s
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('user');
  
};
