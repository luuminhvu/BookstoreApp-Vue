const Order = require("../models/Order");
const createOrder = async (req, res) => {
  try {
    const order = req.body.cartItems; // Lấy đối tượng cartItems từ req.body
    console.log(order);

    // Tạo một đối tượng Order từ dữ liệu đầu vào
    const newOrder = new Order({
      userId: order.userId,
      books: order.items,
      phone: order.phone,
      address: order.city,
      totalAmount: order.total,
      dateDelivered: Date.now() + 7 * 24 * 60 * 60 * 1000,
    });

    // Lưu đơn hàng mới vào cơ sở dữ liệu
    const savedOrder = await newOrder.save();

    // Trả về kết quả cho client hoặc thực hiện các xử lý khác cần thiết
    res.status(200).json({ msg: "Đơn hàng đã được tạo", order: savedOrder });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};

const getOrder = async (req, res) => {
  try {
    console.log(req.params.id);
    const orders = await Order.find({ userId: req.params.id });
    res.status(200).json(orders);
    console.log(orders);
  } catch (error) {
    console.log(error);
  }
};
const deleteOrder = async (req, res) => {
  try {
    const deleteOrder = await Order.findByIdAndDelete(req.params.id);
    if (deleteOrder) {
      res.status(200).json({ msg: "Order deleted" });
    } else {
      res.status(404).json({ msg: "Order not found" });
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = { createOrder, getOrder, deleteOrder };
