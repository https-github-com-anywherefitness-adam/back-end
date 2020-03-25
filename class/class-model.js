const db = require('../database/db-config.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};

function find() {
  return db('classes').select('id', 'name', 'type', 'start_time', 'duration', 'intensity', 'location', 'registered', 'max_size');
}

function findBy(filter) {
  return db('classes').where(filter);
}

async function add(classes){
  const [id] = await db('classes').insert(classes)
  return findById(id)
}

function findById(id) {
  return db('classes')
    .where({ id })
    .first();
}

function update(changes, id){
  return db('classes')
  .where({ id: id })
  .update(changes, id);
}

function remove(id){
  return db('classes')
  .where('id', id)
  .del();
}


