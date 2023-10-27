const express = require("express");
const router = express.Router();
const { isAdmin, auth } = require("../middlewares/auth.js");
const {
  updateUser,
  deleteUser,
  getUser,
  changePassword,
  getUsers,
} = require("../controllers/UserController");
router.get("/", isAdmin, getUsers);
router.get("/:id", getUser);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);
router.put("/change-password/:id", auth, changePassword);

module.exports = router;
