const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name of a product"],
    trim: true,
    maxLength: [20, "product name not exceed than 20 characteres"],
  },
  description: {
    type: String,
    required: [true, "Please enter description of the product "],
    maxLength: [4000, "description can not exceed than 4000 characteres"],
  },
  price: {
    type: Number,
    required: [true, "please enter the price for the product"],
    maxLength: [8, "price can not exceed than 8 characteres"],
  },
  discountPrice: {
    type: String,
    maxLength: [4, "discount price can not exceed than 4 characters"],
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  ratings: { type: Number, default: 0 },
  images: [
    {
      public_id: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  category: {
    type: String,
    required: [true, "please add a categorie of your product"],
  },
  Stock: {
    type: Number,
    required: [true, "Please add some stock for your product"],
    maxLength: [3, "stock can not exceed than 3 characters"],
  },
  numberOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String },
      time: { type: Date, default: Date.now() },
    },
  ],
  user: { type: mongoose.Schema.ObjectId, ref: "user" },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Product", productSchema);
