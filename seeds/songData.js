const { Song } = require('../models');

const songdata = [
  {
    song: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    link: 'https://www.last.fm/music/Nirvana/_/Smells+Like+Teen+Spirit',
  },
  {
    song: 'Mr. Brightside',
    artist: 'The Killers',
    link: 'https://www.last.fm/music/The+Killers/_/Mr.+Brightside',
  },
  {
    song: 'Come as You Are',
    artist: 'Nirvana',
    link: 'https://www.last.fm/music/Nirvana/_/Come+as+You+Are',
  },
  {
    song: 'Creep',
    artist: 'Radiohead',
    link: 'https://www.last.fm/music/Radiohead/_/Creep',
  },
  {
    song: 'Feel Good Inc.',
    artist: 'Gorillaz',
    link: 'https://www.last.fm/music/Gorillaz/_/Feel+Good+Inc.',
  },

];

const seedSong= () => Song.bulkCreate(songdata);

module.exports = seedSong;
