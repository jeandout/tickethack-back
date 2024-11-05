const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    Departure: String,
    Arrival: String,
    Date: Date,
    Price: Number
  });

  const Cart = mongoose.model("cart", cartSchema);

  module.exports = Cart;