const Book = require("../models/Book.js");
const cloudinary = require("../utils/cloudinary.js");
const addBook = async (req, res) => {
  try {
    const { title, category, price, image, desc } = req.body.book;

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
    if (category.trim().length < 4 || category.trim().length > 100) {
      return res.status(400).json({
        msg: "Category must be between 4 and 20 characters long",
      });
    }

    // Create a new Book instance

    if (image) {
      const savedImage = await cloudinary.uploader.upload(image, {
        upload_preset: "BookStore",
      });
      if (savedImage) {
        const books = new Book({
          title: title,
          category: category,
          price: price,
          image: savedImage.secure_url,
          desc: desc,
        });

        // Save the book to the database
        const savedBook = await books.save();

        // Respond with success message, book data
        res.status(200).json({ msg: "Book created", book: savedBook });
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
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
    if (!id || id === undefined) {
      return res.status(400).json({ msg: "Not all fields have been entered." });
    }
    const book = await Book.findById(id);
    res.status(200).json({ book });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const searchBook = async (req, res) => {
  try {
    const keyword = req.params.title; // Lấy từ khóa tìm kiếm từ req.params.title
    const regex = new RegExp(keyword, "i"); // Tạo biểu thức chính quy không phân biệt chữ hoa/thường
    const books = await Book.find({ title: { $regex: regex } });
    res.status(200).json({ books });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
const updateBook = async (req, res) => {
  try {
    // const bookId = req.params.id;
    // const updatedData = req.body.book; // Assuming that req.body contains the updated book data
    // console.log(updatedData);
    // console.log(bookId);
    // // Check if a 'updatedAt' field exists in your schema and set it to the current date.
    // updatedData.updatedAt = new Date();

    // const newBook = await Book.findByIdAndUpdate(bookId, updatedData, {
    //   new: true,
    // });

    // if (!newBook) {
    //   return res.status(404).json({ msg: "Book not found" });
    // }

    // res.status(200).json({ msg: "Book updated", book: newBook });
    const bookId = req.params.id;
    const { title, category, price, image, desc } = req.body.book;
    if (image) {
      const savedImage = await cloudinary.uploader.upload(image, {
        upload_preset: "BookStore",
      });
      if (savedImage) {
        const updatedData = {
          title: title,
          category: category,
          price: price,
          image: savedImage.secure_url,
          desc: desc,
        };
        const newBook = await Book.findByIdAndUpdate(bookId, updatedData, {
          new: true,
        });
        if (!newBook) {
          return res.status(404).json({ msg: "Book not found" });
        }
        res.status(200).json({ msg: "Book updated", book: newBook });
      }
    } else {
      const updatedData = await Book.findByIdAndUpdate(bookId, req.body.book, {
        new: true,
      });
      if (!updatedData) {
        return res.status(404).json({ msg: "Book not found" });
      }
      res.status(200).json({ msg: "Book updated", book: updatedData });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};
const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    const deletedBook = await Book.findByIdAndDelete(bookId);
    if (!deletedBook) {
      return res.status(404).json({ msg: "Book not found" });
    }
    res.status(200).json({ msg: "Book deleted", book: deletedBook });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  addBook,
  getBooks,
  getBook,
  searchBook,
  updateBook,
  deleteBook,
};
