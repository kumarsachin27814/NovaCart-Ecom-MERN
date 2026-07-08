import User from "../model/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sendEmail from '../utils/sendEmail.js';

 const genToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
 }
// Register a new user

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const newUser = new User({
      name,
      email,
      password: hashPassword,
      otp,
      otpExpire: Date.now() + 10 * 60 * 1000,
    });

    await newUser.save();

    const message = `
      Welcome to NovaCart, ${name}!

      Your OTP for account registration is: ${otp}

      This OTP is valid for 10 minutes.
      Please do not share this OTP with anyone.

      Thank you,
      NovaCart Team
      `;
    await sendEmail(
      email,
      "Welcome to NovaCart - Your OTP for registration",
      message,
    );

    return res.status(201).json({
      message: "OTP sent successfully",
      email: newUser.email,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};


// otp
export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    if (user.otp !== otp) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    if (user.otpExpire < Date.now()) {
      return res.status(400).json({
        message: "OTP Expired",
      });
    }

    user.verified = true;
    user.otp = undefined;
    user.otpExpire = undefined;

    await user.save();

    res.json({
      message: "Email verified successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

//login a user

export const loginUser = async (req , res) => {
  try {
    const {email , password} = req.body;
    const user = await User.findOne({email});
    if(!user){
      return res.status(400).json({ message: "Email is not Exists" });
    }
    if (!user.verified) {
      return res.status(400).json({
        message: "Please verify your email first",
      });
    }
    if(user && (await bcrypt.compare(password , user.password))){
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: genToken(user._id)
      });
    }
    else{
      return res.status(400).json({message:'Invalid Email or password'})
    }
  } catch (error) {
    return res.status(500).json({ message: "server error" });

  }
};


// getUser

export const getUsers = async (req , res) => {
  try {
    const users = await User.find({}).select('-password');
    return res.json(users);
  } catch (error) {
    return res.status(500).json({message: 'Server error'});
  }
};



