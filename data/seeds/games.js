
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, name: 'Metroid', genre: "Adventure", releaseYear: 1986},
        {id: 2, name: 'Zelda', genre: "Adventure", releaseYear: 1986},
        {id: 3, name: 'Stardew Valley', genre: "Farming", releaseYear: 2016}
      ]);
    });
};
