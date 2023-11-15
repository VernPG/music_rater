const router = require('express').Router();
const { Genre, Song } = require('../models');
const songPull = require('../utils/apiconnection');

// GET all genres for homepage
router.get('/', async (req, res) => {
  try {
    const dbGenreData = await Genre.findAll({
      include: [
        {
          model: Song,
          as: 'GenreSong',

        },
      ],
    });

    const genres = dbGenreData.map((genre) =>
      genre.get({ plain: true })
    );

    res.render('homepage', {
      genres,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one genre
router.get('/genre/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the genre
    try {
      const dbGenreData = await Genre.findByPk(req.params.id, {
        include: [
          {
            model: Song,
            as: 'GenreSong',
            attributes: [
              'id',
              'song',
              'artist',
              'link',
            ],
          },
        ],
      });
      const genre = dbGenreData.get({ plain: true });
      res.render('genre', { genre, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET one song
router.get('/song/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the song
    try {
      const dbSongData = await Song.findByPk(req.params.id);

      const song = dbSongData.get({ plain: true });

      res.render('song', { song, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/info', (req, res) =>{
  
  res.render('information');
});

router.get('/rating', async (req, res) =>{
  const choice = 1
  const newSong = await songPull.getRockSong();
  const genreSelect = await Genre.findByPk(choice)
  res.render('songrating', {genreSelect, newSong, loggedIn: req.session.loggedIn});
});

module.exports = router;

