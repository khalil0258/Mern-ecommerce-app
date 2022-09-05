const mongoose = require("mongoose");

const connectDataBase = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongo db done ");
    });
};

module.exports = connectDataBase;
