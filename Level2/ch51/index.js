const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  createdAt: { type: Date, default: Date.now }
});
userSchema.index({ email: 1, createdAt: -1 });

const User = mongoose.model("User", userSchema);