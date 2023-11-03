const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");
const UserRouter = require("./routes/auth.js");
const AccountRouter = require("./routes/accounts.js");
const BookRouter = require("./routes/book.js");
const OrderRouter = require("./routes/order.js");
// Create a new Express app
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
dotenv.config(path.join(__dirname, ".env"));
dotenv.config({ path: path.join(__dirname, "../config/default.json") });
const URI = process.env.MONGODB_URI;
// Connect to MongoDB
app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.use("/", UserRouter);
app.use("/api/v1/accounts", AccountRouter);
app.use("/api/v1/books", BookRouter);
app.use("/api/v1/orders", OrderRouter);
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB", err));
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
