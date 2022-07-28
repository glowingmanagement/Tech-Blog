const { Router } = require("express");

const {
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getUserPosts,
} = require("../../controllers/api/blog");

const router = Router();

router.post("/", createPost);
router.put(":/id", updatePost);
router.delete(":/id", deletePost);
router.get("/", getAllPosts);
router.get("/:id", getUserPosts);

module.exports = router;
