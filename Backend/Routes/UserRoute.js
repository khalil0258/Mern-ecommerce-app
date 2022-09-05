const express = require("express");
const router = express.Router();
const { RegisterUser } = require("../controllers/userController");

router.route("/registration").post(RegisterUser);

module.exports = router;
