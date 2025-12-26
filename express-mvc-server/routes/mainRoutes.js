const express = require("express");
const router = express.Router();

// Import controller functions
const {
  home,
  about,
  contact,
  getTime,
  echoData,
} = require("../controllers/mainController");

// Routes (NO LOGIC HERE)
router.get("/", home);
router.get("/about", about);
router.get("/contact", contact);
router.get("/time", getTime);
router.post("/echo", echoData);

module.exports = router;
