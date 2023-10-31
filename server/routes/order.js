const express = require("express");
const { isAdmin, auth } = require("../middlewares/auth.js");
const router = express.Router();
const {
  createOrder,
  getOrder,
  deleteOrder,
  getOrders,
  getTotalRevenue,
  updateOrder,
  getRevenueLast7Days,
  createPaymentUrl,
  vnpayReturn,
} = require("../controllers/OrderController");
router.post("/create_payment_url", createPaymentUrl);
router.get("/vnpay_return", vnpayReturn);
router.get("/", isAdmin, getOrders);
router.get("/revenue", isAdmin, getTotalRevenue);
router.get("/revenue/7days", isAdmin, getRevenueLast7Days);
router.post("/add", createOrder);
router.get("/:id", auth, getOrder);
router.delete("/:id", auth, deleteOrder);
router.put("/:id", isAdmin, updateOrder);

module.exports = router;
