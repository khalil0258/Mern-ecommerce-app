const User = require("../models/UserModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");

// Register user
const RegisterUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = User.create({
    name,
    email,
    password,
    avatar: { public_id: "https://test.com", url: "https://test.com" },
  });

  res.status(201).json({
    success: true,
    user: user,
  });
});

module.exports = { RegisterUser };
