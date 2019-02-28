// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      filename: './dev.postgresql'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'pursefinderpages'
    },
    debug: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'pursefinderpages'
    },
    debug: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
