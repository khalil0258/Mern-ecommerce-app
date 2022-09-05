const express = require("express");
const app = express();
const ErrorHand = require("./middleware/error");
const product = require("./Routes/ProductRoute.js");
const user = require("./Routes/UserRoute.js");

app.use(express.json());
// routes imports
app.use("/api/v2", product);
app.use("/api/v2", user);

app.use(ErrorHand);
module.exports = app;
//  console.log()
