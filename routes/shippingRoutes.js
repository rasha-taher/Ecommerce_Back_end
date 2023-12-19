const express = require("express");
const router = express.Router();

const {
    addShipping,
    getAllShippingOrders,
    deleteShippingById
  }= require("../controllers/shippingController");

  router.post("/addShipping", addShipping);
  router.delete("/deleteShippingById/:id", deleteShippingById);
  router.get("/getAllShippingOrders", getAllShippingOrders);
  module.exports = router;