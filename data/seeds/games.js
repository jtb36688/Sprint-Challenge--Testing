
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, name: 'Metriod', genre: "Adventure"},
        {id: 2, name: 'Zelda', genre: "Adventure"},
        {id: 3, name: 'Stardew Valley', genre: "Farming"}
      ]);
    });
};
