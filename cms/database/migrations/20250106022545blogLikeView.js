
module.exports = {
    async up(knex) {
      await knex.schema.createTable('blog_matrix', (table) => {
        table.increments('id').primary();
        table.integer('blog_id').notNullable();
        table.integer('count').notNullable().defaultTo(0);
        table.enu('type', ['like', 'view']).notNullable()
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
      });
  
      await knex.schema.createTable('blog_matrix_session', (table) => {
        table.increments('id').primary();
        table.integer('matrix_id').unsigned().notNullable()
              .references('id').inTable('blog_matrix')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');
        table.string('session_key').unique();
        table.timestamp('createdAt').defaultTo(knex.fn.now());
      });
    },
  
    async down(knex) {
      await knex.schema.dropTableIfExists('blog_matrix_session');
      await knex.schema.dropTableIfExists('blog_matrix');
    },
  };
  