const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts
router
.route("/")
.get(getAllThought);


// /api/thought/:id
router
.route("/:thoughtId")
.get(getThoughtById)
.put(updateThought)
.delete(removeThought)

// /api/thoughts/:userId
router.route('/:userId')    
      .post(createThought);

// /api/thoughts/:thoughtId/reactions
router
.route("/:thoughtId/reactions")
.post(addReaction)

// /api/thoughts/:thoughtId/reactionId
router
.route("/:thoughtId/:reactionId")
.delete(removeReaction);


module.exports = router;
