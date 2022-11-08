/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema.createTable("address", (table) => {
        table.increments("id").primary();
        table.integer('num');
        table.string('state').notNullable();
        table.string('city').notNullable();
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('id').inTable('user');
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('address');
  
};
