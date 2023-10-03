const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: [true, "Product Id Required."],
  },

  user_id: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Card", CardSchema);
