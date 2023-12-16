const OrderedItem = require("../models/orderedItems");

const addOrderedItem = async (req, res) => {
  try {
    const orderedItem = new OrderedItem({
      productName: req.body.productName,
      price: req.body.price,
      quantity: req.body.quantity,
      vendorName: req.body.vendorName,
      userEmail: req.body.userEmail,
    });
    const savedOrderedItem = await orderedItem.save();
    res.status(200).json({
      code: 200,
      message: "Item added to cart successfully",
      data: savedOrderedItem,
    });
  } catch (error) {
    res.status(400).json({
      code: 400,
      message: "Product was not added successfully",
      error: error.message,
    });
  }
};

const getOrderedItemByProductName = async (req, res) => {
  try {
    const id = req.params.id;
    const orderedItem = await OrderedItem.find({ _id: id });
    res.json(orderedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getItemsByUserEmailAndProductName = async (req, res) => {
    try {
      const { productName, userEmail } = req.params;
      const orderedItem = await OrderedItem.find({ productName, userEmail });
  
      if (orderedItem.length > 0) {
        res.json(orderedItem);
      } else {
        res.status(404).json({ message: 'orderedItem not found for the provided name and last name' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
module.exports = {
  addOrderedItem,
  getOrderedItemByProductName,
  getItemsByUserEmailAndProductName
};
