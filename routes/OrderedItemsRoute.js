const express = require("express");
const router = express.Router();

const{
    addOrderedItem,
    getOrderedItemByProductName,
    getItemsByUserEmailAndProductName
}=require("../controllers/orderedItemsController");

router.post("/addOrderedItem", addOrderedItem);
router.get("/getOrderedItemByProductName/:productName", getOrderedItemByProductName);
router.get("/getItemsByUserEmailAndProductName/:productname/:userEmail", getItemsByUserEmailAndProductName);
module.exports = router;