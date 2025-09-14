const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/app");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Connection error:", err);
  }
};

module.exports = connectDB;

