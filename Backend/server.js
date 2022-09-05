const app = require("./app.js");
const dotenv = require("dotenv");
const connectDataBase = require("./db/dataBase.js");

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server for Handling uncaught Exception`);
});

// config
dotenv.config({
  path: "Backend/config/.env",
});

// connect database
connectDataBase(process.env.MONGO_URI);

// create server
const server = app.listen(process.env.PORT, () => {
  console.log(`server is running in port ${process.env.PORT} `);
});

// unhadled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`shutting down server for ${err.message}`);
  console.log("shutting down server for unhadled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
