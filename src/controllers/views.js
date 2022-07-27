const path = require("path");

const renderHomePage = (req, res) => {
  const filePath = path.join(_dirname, "../../public/index.html");

  return res.sendFile(filePath);
};

module.exports = {
  renderHomePage,
};
