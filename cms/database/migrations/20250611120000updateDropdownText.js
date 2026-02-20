module.exports = {
  async up(knex) {
    await knex('plans').update({
      dropdown_text: knex.raw("CONCAT(product_id, ' - ', title)")
    });
  },

  async down(knex) {
    await knex('plans').update({ dropdown_text: null });
  },
};
