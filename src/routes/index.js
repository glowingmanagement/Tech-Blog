const { Router } = require("express");

const views = require("./views");
const auth = require("./auth");
const api = require("./api");

const router = Router();

router.use("/auth", auth);
router.use("/api", api);
router.use("/", views);

module.exports = router;
