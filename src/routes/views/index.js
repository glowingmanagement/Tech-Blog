const { Router } = require("express");

const {
  renderHomePage,
  renderLoginPage,
  renderSignupPage,
  renderDashboard,
  renderCreate,
  renderPost,
} = require("../../controllers/views");

const auth = require("../../middlewares/auth");

const router = Router();

router.get("/", renderHomePage);
router.get("/login", renderLoginPage);
router.get("/signup", renderSignupPage);
router.get("/dashboard", auth, renderDashboard);
router.get("/create", auth, renderCreate);
router.get("/post/:id", auth, renderPost);

module.exports = router;
