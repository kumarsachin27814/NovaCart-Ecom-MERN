import Razorpay from 'razorpay';
import crypto from 'crypto'; //Random receipt ID generate karne ke liye.
import dotenv from "dotenv";
dotenv.config();

export const createdOrder = async (req , res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    //In credentials se Razorpay ko authenticate karte hain.
    const options = {
      amount: req.body.amount * 100, // Kyuki Razorpay amount paise me leta hai.
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"), //Har order ka unique receipt number.
    };
    const order = await instance.orders.create(options); // Razorpay API ko request jayegi.
    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({message: 'Server error'});
  }
};


export const verifyPayment = async (req , res ) => {
  try {
    const {razorpay_order_id , razorpay_payment_id , razorpay_signature } = req.body;
    const generated_signature = crypto
                .createHmac("sha256" , process.env.RAZORPAY_KEY_SECRET)
                .update(razorpay_order_id + "|" + razorpay_payment_id)
                .digest("hex");
    if(generated_signature === razorpay_signature){
      return res.status(200).json({message: "payment verified successfully"});
    }
    else{
      return res.status(400).json({message: "payment verification failed"});
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};