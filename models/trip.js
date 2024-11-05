const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number
  });

  const Trip = mongoose.model("trips", tripSchema);
  const Cart = mongoose.model('cart', tripSchema)
  const Booked = mongoose.model('booked', tripSchema)

  module.exports = Trip;
  module.exports = Cart;
  module.exports = Booked;