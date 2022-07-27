const renderHomePage = (req, res) => {
  return res.render("home", { currentPage: "home" });
};

const renderLoginPage = (req, res) => {
  return res.render("login", { currentPage: "login" });
};

const renderSignupPage = (req, res) => {
  return res.render("signup", { currentPage: "signup" });
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
};
