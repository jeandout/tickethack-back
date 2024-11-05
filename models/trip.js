const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
    Departure: String,
    Arrival: String,
    Date: Date,
    Price: Number
  });

  const Trip = mongoose.model("trip", tripSchema);

  module.exports = Trip;