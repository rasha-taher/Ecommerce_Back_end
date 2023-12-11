const Shipping = require("../models/shipping");

const addCategory = async (req, res) => {
  try {
    const category = new Category({
      category: req.body.category,
    });

    const saveCategory = await category.save();
    res.status(200).json({
      code: 200,
      message: "Category added successfully",
      data: saveCategory,
    });
  } catch (error) {
    res.status(400).json({
      code: 400,
      message: "Catgory was not added successfully",
      error: error.message,
    });
  }
};
const getAllCategories = async (req, res) => {
  try {
    const data = await Category.find({});
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
    addCategory,
    getAllCategories
}