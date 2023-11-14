const router = require("express").Router();

//import all api route files here
const userApiRoutes = require("./api/user.api.routes");
const songApiRoutes = require("./api/song.api.routes");
const ratingApiRoutes = require("./api/rating.api.routes");

//html handlebars routes
const homeRoutes = require('./home-routes.js');



//add api routes to the router
router.use("/api/user", userApiRoutes);
router.use("/api/song", songApiRoutes);
router.use("/api/rating", ratingApiRoutes);

//html handlebars router
router.use('/', homeRoutes);

module.exports = router;