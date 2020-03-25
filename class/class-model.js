const db = require('../database/db-config.js');

module.exports = {
  find,
  findBy,
  findById,
  update,
  remove,
};

function find() {
  return db('class').select('name', 'type', 'start_time', 'duration', 'intensity', 'location', 'registered', 'max_size');
}

function findBy(filter) {
  return db('class').where(filter);
}

function findById(id) {
  return db('class')
    .where({ id })
    .first();
}

function update(changes, id){
  return db('class')
  .where({ id: id })
  .update(changes, id);
}

function remove(id){
  return db('class')
  .where('id', id)
  .del();
}
