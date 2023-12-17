const express = require("express");
const router = express.Router();

const{
    addOrderDetail,
    getAllOrders,
    getOrderByClientEmail,
    updateProductStatus
}=require("../controllers/orderDetailController");

router.post("/addOrderDetail", addOrderDetail);
router.get("/getAllOrders", getAllOrders);
router.get("/getOrderByClientEmail/:email", getOrderByClientEmail);
router.put("/updateProductStatus/:id", updateProductStatus);
module.exports = router;