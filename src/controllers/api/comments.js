const { User, Comments } = require("../../models");

const createComment = async (req, res) => {
  try {
    const { id } = req.session.user;
    const { content, postId } = req.body;
    await Comments.create({
      userId: id,
      content,
      blogId: postId,
    });
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create post| ${error}`);

    return res.status(500).json({ success: false });
  }
};

module.exports = { createComment };
