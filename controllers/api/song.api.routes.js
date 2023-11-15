const router = require("express").Router();
const Song = require("../../models/Song");
const Rating = require("../../models/Rating")
const GenreTags = require("../../models/GenreTags")

//get all records
router.get("/", async (req, res) => {
  try {
    const payload = await Song.findAll();
    res.status(200).json({ status: "success", payload })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message });
  }
});

router.post("/name/:id", async (req, res) => {
  try {
    const payload = await Song.findAll({
      where: {
        song: req.params.id
      }
    });
    const songID = payload?.[0]?.dataValues?.id || "Notfound"
    res.status(200).json({ status: "success", songID })
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message });
  }
});

//get one record by pk
router.get("/:id", async (req, res) => {
  try {
    const payload = await Song.findByPk(req.params.id);
    res.status(200).json({ status: "success", payload });
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message });
  }
});

//create a new record
router.post("/rating", async (req, res) => {
  try {
    const genreID = 1
    const addSong = {'song': req.body.song, 'artist': req.body.artist, 'link': req.body.link}
    const payload = await Song.create(addSong);
    const songID = payload.dataValues.id
    const addRating = {'rating': req.body.ratechoice, 'timesrated': 1, 'song_id': songID}
    const payload3 = await Rating.create(addRating)
    const addGenreTag = {'genre_id': genreID, 'song_id': songID, 'rating_id': payload3.dataValues.id}
    const payload2 = await GenreTags.create(addGenreTag)

    res.status(200).json({ status: "success", payload });
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message });
  }

});

router.put("/rating/:id", async (req, res) => {
  try {
    const payload = await Song.findAll({
      where: {
        song: req.params.id
      }
    });
    const songID = payload[0].dataValues.id
    const payload2 = await Rating.findAll({
      where: {
        song_id: songID
      }
    });
    console.log (songID)
    console.log(payload2)
    const currentRating = payload2[0].dataValues.rating
    const currentTimesrated = payload2[0].dataValues.timesrated
    const timesratedMath = currentTimesrated+1
    const userRating = Number(req.body.ratechoice)
    const ratingMath = Number(((currentRating*currentTimesrated)+userRating)/(timesratedMath))
    Rating.update(
      {
        rating: ratingMath,
        timesrated: timesratedMath
      },
      {
        where: {
          song_id: songID,
        },
      }
    )
    res.status(200).json({ status: "success", payload2 });
  } catch (err) {
    res.status(500).json({ status: "error", payload2: err.message });
  }

});

module.exports = router;
