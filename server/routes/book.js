const express = require("express");
const { isAdmin } = require("../middlewares/auth.js");
const router = express.Router();

const {
  addBook,
  getBooks,
  getBook,
  searchBook,
  updateBook,
  deleteBook,
} = require("../controllers/BookController");

router.get("/search/:title", searchBook);
router.post("/add", isAdmin, addBook);
router.get("/", getBooks);
router.put("/:id", isAdmin, updateBook);
router.get("/:id", getBook);
router.delete("/:id", isAdmin, deleteBook);

module.exports = router;
