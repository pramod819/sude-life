
module.exports = {
    async up(knex) {
      await knex.schema.createTable('product_rating', (table) => {
        table.increments('id').primary();
        table.integer('product_id').notNullable();
        table.integer('count').notNullable().defaultTo(0);
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
      });
  
      await knex.schema.createTable('product_rating_session', (table) => {
        table.increments('id').primary();
        table.integer('matrix_id').unsigned().notNullable()
              .references('id').inTable('product_rating')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');
        table.string('session_key').unique();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
      });
    },
  
    async down(knex) {
      await knex.schema.dropTableIfExists('product_rating');
      await knex.schema.dropTableIfExists('product_rating_session');
    },
  };
  