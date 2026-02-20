
module.exports = {
    async up(knex) {
      await knex.schema.createTable('otp_history', (table) => {
        table.increments('id').primary();
        table.string('mobile').unique();
        table.integer('count').notNullable().defaultTo(0);
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
      });
    },

    async down(knex) {
      await knex.schema.dropTableIfExists('otp_history');
    },
  };
