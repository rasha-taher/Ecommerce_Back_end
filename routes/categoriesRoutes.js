const express = require("express");
const router = express.Router();

const{
    addCategory,
    getAllCategories
}= require("../controllers/categoriesController")

router.post("/addCategory",addCategory)
router.get("/getAllCategories", getAllCategories)

module.exports = router;