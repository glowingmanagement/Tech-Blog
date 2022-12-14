const { Comments, Blog, User } = require("../../models");

const renderHomePage = async (req, res) => {
  const userDetails = req.session;
  const allPosts = await (
    await Blog.findAll({ include: [{ model: User }] })
  ).map((post) => {
    return post.get({ plain: true });
  });

  return res.render("home", { currentPage: "home", userDetails, allPosts });
};

const renderLoginPage = (req, res) => {
  return res.render("login", { currentPage: "login" });
};

const renderSignupPage = (req, res) => {
  return res.render("signup", { currentPage: "signup" });
};

const renderDashboard = async (req, res) => {
  let userPosts;
  try {
    const userId = req.session.user.id;
    userPosts = await (
      await Blog.findAll({ where: { userId } })
    ).map((post) => {
      return post.get({ plain: true });
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to get ads | ${error.message}`);
    return res.status(500).json({ error: "Failed to get posts" });
  }

  return res.render("dashboard", { currentPage: "dashboard", userPosts });
};

const renderCreate = (req, res) => {
  return res.render("create", { currentPage: "create" });
};

const renderPost = async (req, res) => {
  const userDetails = req.session;
  const { id } = req.params;
  const getPostData = await Blog.findAll({
    where: { id },
    include: [{ model: User }],
    raw: true,
  });

  const getComments = await (
    await Comments.findAll({
      where: { blogId: id },
      include: [{ model: User }],
    })
  ).map((post) => {
    return post.get({ plain: true });
  });

  console.log(getComments);

  const postData = getPostData[0];
  const author = postData["user.userName"];
  return res.render("post", {
    currentPage: "post",
    postData,
    author,
    getComments,
    userDetails,
  });
};

const sortComment = (comment) => {
  const { content, createdAt } = comment;
  return {};
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderDashboard,
  renderCreate,
  renderPost,
};
