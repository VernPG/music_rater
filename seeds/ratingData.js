const { Rating } = require('../models');

const ratingdata = [
  {
    rating: 7,
    song_id: 1,
    user_id: 1,
  },
  {
    rating: 5,
    song_id: 2,
    user_id: 1,
  },
  {
    rating: 9,
    song_id: 3,
    user_id: 1,
  },
  {
    rating: 2,
    song_id: 4,
    user_id: 1,
  },
  {
    rating: 3,
    song_id: 5,
    user_id: 1,
  },
  
  

];

const seedRating= () => Rating.bulkCreate(ratingdata);

module.exports = seedRating;
