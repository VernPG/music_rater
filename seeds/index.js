const sequelize = require('../config/connection');
const genreData = require('./genreData');
const songData = require('./songData');
const usersData = require('./usersData');
const genretagsData = require('./genreTagsData');
const ratingData = require('./ratingData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await genreData();
  await songData();
  await usersData();
  await genretagsData();
  await ratingData();

  process.exit(0);
};

seedAll();
