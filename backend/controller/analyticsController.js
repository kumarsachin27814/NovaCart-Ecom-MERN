import User from '../model/User.js';
import Order from '../model/Order.js'
import Product from '../model/Product.js';

export const getAdminStats = async (req , res) => {
  try {
    const totalUsers = await User.countDocuments({role: 'user'});
    const totalOrders = await Order.countDocuments({});
    const totalProducts = await Product.countDocuments({});

    const orders = await Order.find({});
    // reduce single value return all array of element
    const totalRevenueData = orders.reduce((acc , order) => acc + order.totalAmount , 0);
    return res.json({
      totalUsers,
      totalOrders,
      totalProducts,
      totalRevenue: totalRevenueData
    });
  } catch (error) {
    return res.status(500).json({message: 'Error fetching stats' , error});
  }
}