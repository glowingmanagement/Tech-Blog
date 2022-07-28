const renderHomePage = (req, res) => {
  const userDetails = req.session;
  return res.render("home", { currentPage: "home", userDetails });
};

const renderLoginPage = (req, res) => {
  return res.render("login", { currentPage: "login" });
};

const renderSignupPage = (req, res) => {
  return res.render("signup", { currentPage: "signup" });
};

const renderDashboard = (req, res) => {
  return res.render("dashboard", { currentPage: "dashboard" });
};

const renderCreate = (req, res) => {
  return res.render("create", { currentPage: "create" });
};

module.exports = {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderDashboard,
  renderCreate,
};
