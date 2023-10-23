const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrder,
  deleteOrder,
  getOrders,
  getTotalRevenue,
} = require("../controllers/OrderController");
router.get("/", getOrders);
router.get("/revenue", getTotalRevenue);
router.post("/add", createOrder);
router.get("/:id", getOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
