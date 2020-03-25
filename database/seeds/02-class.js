exports.seed = function(knex) {
    return knex('class').insert([
      {name: 'Golden Gloves', type: 'kickboxing', start_time: '10am', intensity: 'hardcore', duration: '45min', location: 'unknown', registered: 10, max_size: 15},
      {name: 'Yoga', type: 'yoga', start_time: '7am', duration: '1hr', intensity: 'chill', location: 'bamboo lounge', registered: 12, max_size: 30},
    ]);
};