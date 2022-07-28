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
  const { id } = req.params;
  const getPostData = await Blog.findAll({
    where: { id },
    include: [{ model: User }],
    raw: true,
  });

  const postData = getPostData[0];
  console.log(postData);
  return res.render("post", { currentPage: "post", postData });
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderDashboard,
  renderCreate,
  renderPost,
};
