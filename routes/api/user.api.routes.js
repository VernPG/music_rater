const router = require("express").Router();
const User = require("../../db/User");

//get all records
router.get("/", async (req, res) => {
  try {
    const payload = await User.findAll();
    res.status(200).json({ status: "success", payload });
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message });
  }
});
//get one record by pk
router.get("/:id", async (req, res) => {
  try {
    const payload = await User.findByPk(req.params.id);
    res.status(200).json({ status: "success", payload });
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message });
  }
});
//create a new record
router.post("/", async (req, res) => {
  try {
    const payload = await User.create(req.body);
    res.status(200).json({ status: "success", payload });
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message });
  }
});
//update a record
router.put("/:id", async (req, res) => {
  try {
    const payload = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ status: "success", payload });
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const payload = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ status: "success", payload });
  } catch (err) {
    res.status(500).json({ status: "error", payload: err.message });
  }
});


module.exports = router;
