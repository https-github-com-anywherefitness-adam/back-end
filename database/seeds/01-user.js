
exports.seed = function(knex) {
    return knex('user').insert([
      {username: 'admin', email: 'admin@email.com', password: 'password', client: false, instructor: false },
      {username: 'jake', email: 'jake@email.com', password: 'password', client: false, instructor: false },
      {username: 'dorothy', email: 'dorothy@email.com', password: 'password', client: false, instructor: false },
      {username: 'kyle', email: 'kyle@email.com', password: 'password', client: false, instructor: false },
      {username: 'amy', email: 'amy@email.com', password: 'password', client: false, instructor: false },
    ]);
};