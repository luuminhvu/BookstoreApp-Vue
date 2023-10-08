const express = require("express");
const router = express.Router();
const {
  updateUser,
  deleteUser,
  getUser,
} = require("../controllers/UserController");

router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
module.exports = router;
