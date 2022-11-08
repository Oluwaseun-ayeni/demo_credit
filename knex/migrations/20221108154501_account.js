/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
    return knex.schema.createTable('account', function(table) {
        table.increments("id").primary();
        table.integer('acc_balance',100).notNullable();
        table.integer('acc_no', 10).notNullable();
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('id').inTable('user');
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
        })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('account');

  
};
