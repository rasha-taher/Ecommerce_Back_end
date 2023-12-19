const Shipping = require("../models/shipping");

const addShipping = async (req, res) => {
  try {
    const shipping = new Shipping({
      shipping: req.body.category,
    });

    const saveShipping = await shipping.save();
    res.status(200).json({
      code: 200,
      message: "Shipping added successfully",
      data: saveShipping,
    });
  } catch (error) {
    res.status(400).json({
      code: 400,
      message: "Shipping was not added successfully",
      error: error.message,
    });
  }
};
const getAllShippingOrders = async (req, res) => {
  try {
    const data = await Shipping.find({});
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
const deleteShippingById= async (req, res) => {
  try {
    const { id } = req.params; 
    const deletedShipping = await Shipping.deleteOne({ _id: id });
    res.status(200).json({
      success: true,
      message: "Shipping deleted successfully",
      projects: deletedShipping,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error occurred while deleting the Shipping",
      error: error,
    });
  }
};
module.exports = {
  addShipping,
  getAllShippingOrders,
  deleteShippingById
}