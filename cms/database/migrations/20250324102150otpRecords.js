
module.exports = {
    async up(knex) {
      await knex.schema.createTable('otp_records', (table) => {
        table.increments('id').primary();
        table.integer('otp_id').notNullable();
        table.string('otp').notNullable();
        table.string('type').notNullable();
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
        table.index(['otp_id'], 'otp_id');
        table.index(['otp'], 'otp');
        table.index(['type'], 'otp_type');
      });
    },

    async down(knex) {
      await knex.schema.dropTableIfExists('otp_records');
    },
  };
