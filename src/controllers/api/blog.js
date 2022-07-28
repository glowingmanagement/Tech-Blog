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

const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await Blog.destroy({ where: { id } });

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete post| ${error}`);

    return res.status(500).json({ success: false });
  }
};

const getAllPosts = () => {};

const getUserPosts = () => {};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getUserPosts,
};
