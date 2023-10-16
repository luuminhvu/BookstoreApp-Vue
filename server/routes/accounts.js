const express = require("express");
const router = express.Router();
const {
  updateUser,
  deleteUser,
  getUser,
  changePassword,
} = require("../controllers/UserController");

router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.put("/change-password/:id", changePassword);

module.exports = router;
