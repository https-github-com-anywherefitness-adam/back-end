
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', tbl => {
      tbl.increments()
      tbl.string('username', 64).notNullable().unique()
      tbl.string('email', 64).notNullable().unique()
      tbl.string('password', 64).notNullable()
      tbl.boolean('client')
      tbl.boolean('instructor')
  })
  .createTable('class', tbl => {
      tbl.increments()
      tbl.string('name', 64).notNullable().unique()
      tbl.string('type', 64).notNullable()
      tbl.string('start_time', 64).notNullable()
      tbl.string('duration', 64).notNullable()
      tbl.string('intensity', 64).notNullable()
      tbl.string('location', 64).notNullable()
      tbl.int('registered')
      tbl.int('max_size')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('class')
  .dropTableIfExists('user')
};
