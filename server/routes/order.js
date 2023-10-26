const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrder,
  deleteOrder,
  getOrders,
  getTotalRevenue,
  updateOrder,
  getRevenueLast7Days,
} = require("../controllers/OrderController");
router.get("/", getOrders);
router.get("/revenue", getTotalRevenue);
router.get("/revenue/7days", getRevenueLast7Days);
router.post("/add", createOrder);
router.get("/:id", getOrder);
router.delete("/:id", deleteOrder);
router.put("/:id", updateOrder);

module.exports = router;
