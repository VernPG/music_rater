const router = require("express").Router();
const User = require("../../models/User");

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

const regenToken = async()=>{
  if(!token){
      return;
  }
  console.log(token);
  const mainTokenExp = api.decode(token).exp;
  if(mainTokenExp <= Date.now()/1000){
      //main token has expired
      const newToken = await axios.post("http://localhost:5000/api/user/token", {
          token:reToken,
      })
      token = newToken.data.accessToken;
      console.log(token)
      localStorage.setItem("accessToken", token);
  }
}

let intrId = setInterval(regenToken, 55(60*1000));

module.exports = router;
