const express = require("express");
const router = express.Router();

const{
    addVendor,
    getAllVendors,
    getVendorByNameAndLastName,
    deleteVendorById,
    updateVendorById

}= require("../controllers/vendorController");

router.post("/addVendor", addVendor);
router.get("/getAllVendors", getAllVendors);
router.get("/getVendorByNameAndLastName/:name/:lastName", getVendorByNameAndLastName);
router.delete("/deleteVendorById/:id", deleteVendorById);
router.put("/updateVendorById/:id", updateVendorById);

module.exports = router;
  