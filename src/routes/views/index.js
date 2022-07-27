const { Router } = require("express");

const { renderHomePage } = require("../../controllers/views");

const auth = require("../../middlewares/auth");

const router = Router();

router.get("/", renderHomePage);

module.exports = router;
