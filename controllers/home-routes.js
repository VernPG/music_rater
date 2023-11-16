const router = require('express').Router();
const { Genre, Song, Rating } = require('../models');
const songPull = require('../utils/apiconnection');

// GET all genres for homepage
router.get('/', async (req, res) => {
  
  //pulls genre data from the api
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
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
  const choice = 1
  const newSong = await songPull.getRockSong();
  const genreSelect = await Genre.findByPk(choice)
  res.render('songrating', {genreSelect, newSong, loggedIn: req.session.loggedIn});
  }
});

router.get('/topsongs', async(req, res) =>{


  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the genre
    try {
      const ratinglist = await Rating.findAll({
        include: [
          {
            model: Song,
            as: 'ratingsong',
            attributes: [
              'id',
              'song',
              'artist',
              'link'
            ],
          },
        ],
        order:[
          ['rating', 'DESC']
        ],
        limit:15
      });

      const topsongs = ratinglist.map((topsongs) =>
      topsongs.get({ plain: true })
      );      
      res.render('topsongs', { topsongs, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

})

router.get('/genreselect', (req, res) =>{
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
  res.render('genreselect', {loggedIn: req.session.loggedIn });
  }
});




module.exports = router;

