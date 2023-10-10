const createOrder = async (req, res) => {
  try {
    const order = req.body;
    const newOrder = new Order(order);
    await newOrder.save();
    res.status(200).json(newOrder);
  } catch (error) {
    console.log(error);
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

module.exports = { createOrder, getOrder };
