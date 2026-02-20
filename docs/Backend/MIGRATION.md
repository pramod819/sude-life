# Introduction

Migrations are run using JavaScript migration files stored in ./cms/database/migrations.

Migration scripts can be created using knexjs library. Please check https://knexjs.org/guide/schema-builder.html

## Create Migration file

- make infra-shell-cms
- cd cms/database/migrations && touch "$(date +%Y.%m.%dT%H.%M.%S).migration"."js"

## Example Migration script

```javascript

module.exports = {
    async up(knex) {
        const exists = await knex.schema.hasTable('contact')
            if(!exists) {
                await knex.schema.createTable('contact', function (t) {
                t.increments('id').primary();
                t.string('first_name', 100);
                t.string('last_name', 100);
                t.text('bio');
            });
        }
    },
};

```


