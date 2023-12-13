const express = require("express");
const router = express.Router();

const {
    addShipping,
    getAllShippingOrders
  }= require("../controllers/shippingController");

  router.post("/addShipping", addShipping);

  router.get("/getAllShippingOrders", getAllShippingOrders);
  module.exports = router;