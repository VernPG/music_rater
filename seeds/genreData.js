const { Genre } = require('../models');

const genredata = [
  {
    genre_name: 'Rock',
  },
  {
    genre_name: '90s',
  },
  {
    genre_name: 'Disco',
  },


];

const seedGenre= () => Genre.bulkCreate(genredata);

module.exports = seedGenre;


