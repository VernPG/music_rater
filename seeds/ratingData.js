const { Rating } = require('../models');

const ratingdata = [
  {
    rating: 7.6,
    timesrated: 4,
    song_id: 1,
  },
  {
    rating: 5.2,
    timesrated: 3,
    song_id: 2,
  },
  {
    rating: 9,
    timesrated: 1,
    song_id: 3,
  },
  {
    rating: 2,
    timesrated: 2,
    song_id: 4,
  },
  {
    rating: 3,
    timesrated: 4,
    song_id: 5,
  },
  
  

];

const seedRating= () => Rating.bulkCreate(ratingdata);

module.exports = seedRating;
