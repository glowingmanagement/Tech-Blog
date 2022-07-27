const { Router } = require("express");

const { renderHomePage } = require("../controllers/views.js");

const router = Router();

router.get("/", renderHomePage);

module.exports = router;
