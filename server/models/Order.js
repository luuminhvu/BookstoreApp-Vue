const moongose = require("mongoose");
const orderSchema = moongose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    books: [],
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      default: "COD",
    },
    dateOrdered: {
      type: Date,
      default: Date.now,
    },
    dateDelivered: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = moongose.model("Order", orderSchema);
