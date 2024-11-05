const mongoose = require("mongoose");

const bookedSchema = mongoose.Schema({
    Departure: String,
    Arrival: String,
    Date: Date,
    Price: Number
  });

  const Book = mongoose.model("book", bookedSchema);

  module.exports = Book;