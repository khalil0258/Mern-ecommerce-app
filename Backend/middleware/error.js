const ErrorHandler = require("../utils/ErrorHandler.js");

function errorHandler(err, req, res, next) {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "interval server error ";
  // wrong mongodb id error
  if (err.name === "CastError") {
    const message = `Resources not found with this id..Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    error: err.message,
  });
  //   return res.status(500).send("something went wrong");
}

module.exports = errorHandler;
