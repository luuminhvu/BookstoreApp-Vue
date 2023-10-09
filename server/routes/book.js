const express = require("express");
const router = express.Router();

const { addBook, getBooks, getBook } = require("../controllers/BookController");

router.post("/add", addBook);
router.get("/", getBooks);
router.get("/:id", getBook);

module.exports = router;
