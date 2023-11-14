const router = require("express").Router();
const Song = require("../../models/Song");

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
router.post("/", async (req, res) => {
  try {
    const payload = await Song.create(req.body);
    res.status(200).json({ status: "success", payload });
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message });
  }
});



module.exports = router;
