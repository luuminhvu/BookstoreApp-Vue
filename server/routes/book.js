const express = require("express");
const router = express.Router();

const {
  addBook,
  getBooks,
  getBook,
  searchBook,
  updateBook,
} = require("../controllers/BookController");

router.get("/search/:title", searchBook);
router.post("/add", addBook);
router.get("/", getBooks);
router.put("/:id", updateBook);
router.get("/:id", getBook);

module.exports = router;
