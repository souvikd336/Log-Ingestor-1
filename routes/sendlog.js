const express = require("express");
const router = express.Router();

const {sendlog} = require("../controllers/sendlogControllers.js");

router.route("/").post(sendlog);


module.exports = router;
