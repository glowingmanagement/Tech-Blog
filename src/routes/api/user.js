const { Router } = require("express");

const {
  updateUser,
  getUserById,
  deleteUser,
} = require("../../controllers/api/user.js");

const router = Router();

router.get("/:id", getUserById);

router.put("/", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
