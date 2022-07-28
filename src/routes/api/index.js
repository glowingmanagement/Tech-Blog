const { Router } = require("express");

const blog = require("./blog");
const user = require("./user");
const comments = require("./comments");

const router = Router();
router.use("/blog", blog);

module.exports = router;
