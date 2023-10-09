const Book = require("../models/Book.js");

const addBook = async (req, res) => {
  try {
    console.log(req.body);
    const { title, category, price, image, desc } = req.body;

    // Check if both title and category are provided
    if (!title || !category) {
      return res.status(400).json({ msg: "Not all fields have been entered." });
    }

    // Check title length
    if (title.trim().length < 4) {
      return res.status(400).json({
        msg: "Title must be between 4 and 20 characters long",
      });
    }

    // Check category length
    if (category.trim().length < 4 || category.trim().length > 20) {
      return res.status(400).json({
        msg: "Category must be between 4 and 20 characters long",
      });
    }

    // Create a new Book instance
    const newBook = new Book({
      title: title,
      category: category,
      price: price,
      image: image,
      desc: desc,
    });

    // Save the book to the database
    const savedBook = await newBook.save();

    // Respond with success message, book data
    res.status(200).json({ msg: "Book created", book: savedBook });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
    console.log(err);
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ books });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
const getBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    res.status(200).json({ book });
  } catch {
    res.status(500).json({ msg: err.message });
  }
};
module.exports = { addBook, getBooks, getBook };
