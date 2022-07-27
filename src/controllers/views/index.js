const renderHomePage = (req, res) => {
  return res.render("home", { currentPage: "home" });
};

module.exports = {
  renderHomePage,
};
