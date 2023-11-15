const router = require("express").Router();
const Song = require("../../models/Song");
const Rating = require("../../models/Rating")
const GenreTags = require("../../models/GenreTags")

//get all records
router.get("/", async (req, res) => {
  try {
    const payload = await Song.findAll();
    res.status(200).json({ status: "success", payload });
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
    const addSong = {'song': req.body.song, 'artist': req.body.artist, 'link': req.body.link}
    const payload = await Song.create(addSong);
    const songID = payload.dataValues.id
    const addGenreTag = {'genre_id': 1, 'song_id': songID}
    const payload2 = await GenreTags.create(addGenreTag)
    const addRating = {'rating': req.body.ratechoice, 'song_id': songID}
    const payload3 = await Rating.create(addRating)
    res.status(200).json({ status: "success", payload });
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message });
  }

});



module.exports = router;
