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

module.exports = {
  addShipping,
  getAllShippingOrders
}