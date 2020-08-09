import knex from 'knex';

// Faço as alterações em uma tabela.
export async function up(knex: knex) {
  // Crate Table cria uma tabela e recebe como segundo parâmetro uma arrow function que por sua vez recebe como parâmetro a tabela que acabamos de criar.
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  });
}

// Deu ruim e preciso voltar as alterações feitas.
export async function down(knex: knex) {
  return knex.schema.dropTable('users');
}