import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import connectDB from "./config/db.js";
import User from "./model/User.js";
import Product from "./model/Product.js";

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    // Existing data delete
    await User.deleteMany({});
    await Product.deleteMany({});

    console.log("Old data deleted");

    // Users
    const users = [
      {
        name: "Admin User",
        email: "admin@gmail.com",
        password: await bcrypt.hash("admin123", 10),
        role: "admin",
        verified: true,
      },
      {
        name: "Sachin Kumar",
        email: "sachin@gmail.com",
        password: await bcrypt.hash("123456", 10),
        role: "user",
        verified: true,
      },
      {
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        password: await bcrypt.hash("123456", 10),
        role: "user",
        verified: true,
      },
    ];

    const createdUsers = await User.insertMany(users);

    console.log(`${createdUsers.length} users inserted`);

    // Products
    const products = [
      {
        name: "iPhone 15",
        description: "Apple flagship smartphone",
        price: 79999,
        category: "Mobile",
        stock: "25",
        imageUrl:
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
      },
      {
        name: "Samsung Galaxy S24",
        description: "Samsung premium smartphone",
        price: 74999,
        category: "Mobile",
        stock: "20",
        imageUrl:
          "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
      },
      {
        name: "Boat Headphones",
        description: "Wireless Bluetooth headphones",
        price: 2999,
        category: "Accessories",
        stock: "50",
        imageUrl:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      },
      {
        name: "Dell Inspiron",
        description: "Laptop for coding and office work",
        price: 55999,
        category: "Laptop",
        stock: "10",
        imageUrl:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      },
      {
        name: "Mechanical Keyboard",
        description: "RGB mechanical keyboard",
        price: 3999,
        category: "Accessories",
        stock: "30",
        imageUrl:
          "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
      },
    ];

    const createdProducts = await Product.insertMany(products);

    console.log(`${createdProducts.length} products inserted`);

    console.log("Seeding completed successfully ✅");

    process.exit(0);
  } catch (error) {
    console.error("Seeding failed ❌", error);
    process.exit(1);
  }
};

seedData();
