// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

 require('dotenv').config()

 module.exports = {
 
   development: {
     client: 'mysql2',
     connection: {
       host: "127.0.0.1",
       user: "Storm",
       password: "La bete1!",
       database: "demo_credit",
       port:"3306"
     },
     migrations: {
       directory: __dirname + '/knex/migrations',
     },
     seeds: {
       directory: __dirname + '/knex/seeds'
   }
 },
 
 //   staging: {
 //     client: 'postgresql',
 //     connection: {
 //       database: 'my_db',
 //       user:     'username',
 //       password: 'password'
 //     },
 //     pool: {
 //       min: 2,
 //       max: 10
 //     },
 //     migrations: {
 //       tableName: 'knex_migrations'
 //     }
 //   },
 
 //   production: {
 //     client: 'postgresql',
 //     connection: {
 //       database: 'my_db',
 //       user:     'username',
 //       password: 'password'
 //     },
 //     pool: {
 //       min: 2,
 //       max: 10
 //     },
 //     migrations: {
 //       tableName: 'knex_migrations'
 //     }
 //   }
 
 };