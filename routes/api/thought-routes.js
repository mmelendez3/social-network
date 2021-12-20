const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts
router
.route("/")
.get(getAllThought)
.post(addThought);

// /api/thought/:id
router
.route("/:thoughtId")
.get(getThoughtById)
.put(updateThought)
.delete(removeThought)

// /api/thoughts/:id/reactions

// /api/thoughts/<thoughtId>/<commentId>
router
.route("/:id/reactions")
.post(addReaction)
.delete(removeReaction);


module.exports = router;
