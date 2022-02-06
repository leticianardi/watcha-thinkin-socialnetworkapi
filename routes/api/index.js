const router = require("express").Router();

// routes for user and thoughts
const userRoutes = require("./user-routes");
const thougthRoutes = require("./thought-routes");

router.use("/users", userRoutes);
router.use("/thoughts", thougthRoutes);

module.exports = router;
