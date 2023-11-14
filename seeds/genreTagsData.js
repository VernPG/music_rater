const { GenreTags } = require('../models');

const genretagsdata = [
  {
    genre_id: 1,
    song_id: 1,
  },
  {
    genre_id: 1,
    song_id: 2,
  },
  {
    genre_id: 1,
    song_id: 3,
  },
  {
    genre_id: 1,
    song_id: 4,
  },
  {
    genre_id: 1,
    song_id: 5,
  },

];

const seedGenreTags= () => GenreTags.bulkCreate(genretagsdata);

module.exports = seedGenreTags;
