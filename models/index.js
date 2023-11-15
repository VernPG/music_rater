const Rating = require('./Rating');
const Song = require('./Song');
const User = require('./User');
const Genre = require('./Genre');
const GenreTags = require('./GenreTags')

Rating.belongsToMany(Song, {
  through: {
    model: GenreTags,
    unique: false
  },
  as: 'RatingSong',
  foreignKey:{
    name: 'rating_id',
    allowNull:false
  }
})


Song.belongsToMany(Rating, {
  through: {
    model: GenreTags,
    unique: false
  },
  as: 'SongRating',
  foreignKey:{
    name: 'song_id',
    allowNull:false
  }
})

Song.belongsToMany(Genre, {
  through: {
    model: GenreTags,
    unique: false
  },
  as: 'SongGenre',
  foreignKey:{
    name: 'song_id',
    allowNull:false
  }
})

Genre.belongsToMany(Song, {
  through: {
    model: GenreTags,
    unique: false
  },
  as: 'GenreSong',
  foreignKey:{
    name: 'genre_id',
    allowNull:false
  }
})




module.exports = { Song, User, Rating, Genre, GenreTags  };