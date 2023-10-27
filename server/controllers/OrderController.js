const Order = require("../models/Order");
const User = require("../models/User");
const moment = require("moment");
const createOrder = async (req, res) => {
  try {
    const order = req.body.cartItems; // Lấy đối tượng cartItems từ req.body

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
    const orders = await Order.find({ userId: req.params.id });
    res.status(200).json(orders);
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
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    const ordersWithUserFullname = await Promise.all(
      orders.map(async (order) => {
        // Tìm thông tin người dùng (user) dựa trên userId
        const user = await User.findById(order.userId);

        return {
          order: order,
          fullname: user ? user.fullname : null, // Lấy tên đầy đủ hoặc null nếu không tìm thấy người dùng
        };
      })
    );

    res.status(200).json(ordersWithUserFullname);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getTotalRevenue = async (req, res) => {
  try {
    const orders = await Order.find();
    let total = 0;
    orders.forEach((order) => {
      total += order.totalAmount;
    });
    res.status(200).json({ total });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const getRevenueLast7Days = async (req, res) => {
  const last7Days = moment().subtract(7, "days").format("YYYY-MM-DD HH:mm:ss");
  try {
    const orders = await Order.aggregate([
      {
        $match: { dateOrdered: { $gte: new Date(last7Days) } },
      },
      {
        $project: {
          day: { $dayOfWeek: "$dateOrdered" },
          sales: "$totalAmount",
        },
      },
      {
        $group: {
          _id: "$day",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const updatedData = req.body;
    const status = updatedData.status;
    const dateDelivered = updatedData.dateDelivered;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ msg: "Order not found" });
    }
    if (status) {
      order.status = status;
    }
    if (dateDelivered) {
      order.dateDelivered = dateDelivered;
    }
    const newOrder = await order.save();

    res.status(200).json({ msg: "Order updated", order: newOrder });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
module.exports = {
  createOrder,
  getOrder,
  deleteOrder,
  getOrders,
  getTotalRevenue,
  updateOrder,
  getRevenueLast7Days,
};
