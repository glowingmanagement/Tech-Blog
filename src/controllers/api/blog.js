const { User, Blog } = require("../../models");

const createPost = async (req, res) => {
  try {
    const { id } = req.session.user;
    const { title, content } = req.body;
    const createPost = await Blog.create({
      userId: id,
      title,
      description: content,
    });
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create post| ${error}`);

    return res.status(500).json({ success: false });
  }
};

const updatePost = () => {};

const deletePost = () => {};

const getAllPosts = () => {};

const getUserPosts = () => {};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getUserPosts,
};
