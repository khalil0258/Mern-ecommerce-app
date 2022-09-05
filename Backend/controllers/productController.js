const Product = require("../models/product.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");
const Features = require("../utils/Features.js");

// create product
const createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, product });
});

// get all products
let getAllProducts = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 8;

  const features = new Features(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await features.query;
  res.status(200).json({ msg: "success", products });
});

// update produtc --admin
const updateProduct = catchAsyncErrors(async (req, res) => {
  let productup = await Product.findById(req.params.id);
  if (!productup) {
    return res
      .status(500)
      .json({ success: false, message: "Product is not found" });
  }
  productup = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useUnified: false,
  });
  console.log("hello", req.body);
  res.status(200).json({ success: true, productup });
});

// delete product
const deleteProduct = catchAsyncErrors(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res
      .status(500)
      .json({ success: false, message: "product is not found with this id" });
  }
  await product.remove();
  res
    .status(200)
    .json({ success: true, message: "Product deleted successfully" });
});

// single product details
const getSingleProductDetail = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product is not found with this id2", 404));
  }

  res.status(200).json({ success: true, product });
});

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProductDetail,
};
