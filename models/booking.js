const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number
  });

  const Cart = mongoose.model("booking", bookingSchema);

  module.exports = Booking;
