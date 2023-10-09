const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register
const register = async (req, res) => {
  try {
    const { username, password, fullname, gender } = req.body;

    // Check if both username and password are provided
    if (!username || !password) {
      return res.status(400).json({ msg: "Not all fields have been entered." });
    }

    // Check username length
    if (username.trim().length < 4 || username.trim().length > 20) {
      return res.status(400).json({
        msg: "Username must be between 4 and 20 characters long",
      });
    }

    // Check password length
    if (password.trim().length < 4) {
      return res.status(400).json({
        msg: "Password must be at least 4 characters long",
      });
    }
    const checkUserNames = username.trim().toLowerCase();
    // Check if the username already exists
    const existUser = await User.findOne({ username: checkUserNames });
    if (existUser) {
      return res.status(400).json({ msg: "Username already exists" });
    }

    // Hash the password
    const hashedPass = await bcrypt.hash(password, 10);

    // Create a new User instance
    const newUser = new User({
      username: username.trim().toLowerCase(),
      password: hashedPass,
      fullname: fullname,
      gender: gender,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Create a JWT token for the user
    const token = jwt.sign({ user: savedUser }, process.env.JWT_SECRET);

    // Respond with success message, user data, and token
    res.status(200).json({ msg: "User created", user: savedUser, token });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
    console.log(err);
  }
};
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if both username and password are provided
    if (!username || !password) {
      return res.status(400).json({ msg: "Not all fields have been entered." });
    }

    // Check if the username exists
    const user = await User.findOne({
      username: username.trim().toLowerCase(),
    });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Create a JWT token for the user
    const token = jwt.sign({ user }, process.env.JWT_SECRET);

    // Respond with success message, user data, and token
    res.status(200).json({ msg: "User logged in", user, token });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body.account;

    // Kiểm tra xem người dùng tồn tại
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "Người dùng không tồn tại" });
    }

    // Cập nhật thông tin người dùng
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });

    res
      .status(200)
      .json({ user: updatedUser, msg: "Người dùng đã được cập nhật" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if (deleteUser) {
      res.status(200).json({ msg: "User deleted" });
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
const getUser = async (req, res) => {
  try {
    const getUser = await User.findById(req.params.id);
    if (getUser) {
      res.status(200).json({ user: getUser });
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = { register, login, updateUser, deleteUser, getUser };
