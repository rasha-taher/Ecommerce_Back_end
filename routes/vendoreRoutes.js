const express = require("express");
const router = express.Router();

const{
    addVendor,
    getAllVendors,
    getVendorByNameAndLastName,
    deleteVendorById,
    updateVendorByEmail,
    vendorLogin,
    getVendorNameByEmail,
    getVendorByEmail

}= require("../controllers/vendorController");

router.post("/addVendor", addVendor);
router.get("/getAllVendors", getAllVendors);
router.get("/getVendorByNameAndLastName/:name/:lastName", getVendorByNameAndLastName);
router.get("/vendorLogin/:email/:password", vendorLogin);
router.delete("/deleteVendorById/:id", deleteVendorById);
router.put("/updateVendorByEmail/:email", updateVendorByEmail);
router.get("/getVendorNameByEmail/:email", getVendorNameByEmail);
router.get("/getVendorByEmail/:email", getVendorByEmail);
module.exports = router;
  