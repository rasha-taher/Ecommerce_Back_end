const express = require("express");
const router = express.Router();

const{
    addProduct,
    getAllProduct,
    getProductByName,
    getPoductByVendorName,
    getProductByCategory,
    deleteProductByName,
    updateProductByName,
    updateProductById
}=require("../controllers/productController");


router.post("/addProduct", addProduct);
router.get("/getAllProduct", getAllProduct);
router.get("/getProductByName/:name", getProductByName);
router.get("/getPoductByVendorName/:vendorName", getPoductByVendorName);
router.get("/getProductByCategory/:category", getProductByCategory);
router.delete("/deleteProductByName/:name", deleteProductByName);
router.put("/updateProductByName/:name", updateProductByName);
router.put("/updateProductById/:id", updateProductById);

module.exports = router;