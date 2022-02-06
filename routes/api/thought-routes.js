const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// /api/users
router.route("/").get(getAllThoughts).post(createThought);

// /api/users/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/users/:userId/friends/:friendId
router
  .route("/:userId/friends/:friendId")
  .post(addReaction)
  .delete(deleteReaction);

module.exports = router;
