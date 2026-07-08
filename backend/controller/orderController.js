import Order from "../model/Order.js";

// create a new Order
export const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, address, paymentId } = req.body;

    if (!items || items.length === 0 || !totalAmount || !address) {
      return res.status(400).json({ message: "Invalid order data" });
    }

    const order = new Order({
      user: req.user._id,
      items,
      totalAmount,
      address,
      paymentId,
    });

    await order.save();

    return res
      .status(201)
      .json({ message: "Order created successfully", order });
  } catch (error) {
    return res.status(500).json({ message: "Error creating order", error });
  }
};

// my Order
export const getmyOrder = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate(
      "items.productId",
      "name price",
    );
    return res.json(orders);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching orders", error });
  }
};

// get all user
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user", "id name");
    return res.json(orders);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching orders",
      error,
    });
  }
};

// update status
export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);

    if (order) {
      order.status = status;
      await order.save();
      return res.json({ message: "order status updated", order });
    }

    return res.status(404).json({ message: "Order not found" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error updating order status", error });
  }
};

