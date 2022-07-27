const { Router } = require("express");

const {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
} = require("../../controllers/views");

const auth = require("../../middlewares/auth");

const router = Router();

router.get("/", renderHomePage);
router.get("/login", renderLoginPage);
router.get("/signup", renderSignupPage);

module.exports = router;
