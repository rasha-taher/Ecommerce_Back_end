const express = require("express");
const router = express.Router();

const{
    addVendor,
    getAllVendors,
    getVendorByNameAndLastName,
    deleteVendorById,
    updateVendorById,
    vendorLogin

}= require("../controllers/vendorController");

router.post("/addVendor", addVendor);
router.get("/getAllVendors", getAllVendors);
router.get("/getVendorByNameAndLastName/:name/:lastName", getVendorByNameAndLastName);
router.get("/vendorLogin/:email/:password", vendorLogin);
router.delete("/deleteVendorById/:id", deleteVendorById);
router.put("/updateVendorById/:id", updateVendorById);

module.exports = router;
  