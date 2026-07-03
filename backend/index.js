import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config(); // conntect karna file ya janna kaha h 


import connectDB from './config/db.js';
connectDB();

import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js'
import orderRoutes from "./routes/orderRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";

const app = express();
app.use(cors(
  {
    origin: ['http://localhost:3000' , 'http://127.0.0.1:3000', process.env.FRONTEND_URL],
    credentials: true
  }
));
app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.get("/" , (req , res) => {
  res.send("NovaCart Backend is Working Properly!");
});

app.use('/api/auth' , authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);




const PORT = process.env.PORT || 5000 ;

app.listen(PORT , () => {
  console.log(`server is running on port : ${PORT}`)
});