const Rating = require('./Rating');
const Song = require('./Song');
const User = require('./User');

User.belongsToMany(Song, {
  through: {
    model: Trip,
    unique: false
  },
  as: 'UserSong'
})

Song.belongsToMany(User, {
  through: {
    model: Trip,
    unique: false
  },
  as: 'SongUser'
})

module.exports = { Song, Location, Rating  };