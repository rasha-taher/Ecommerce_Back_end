const OrderDetail= require("../models/orderDetail");

const addOrderDetail = async (req, res) => {
    try {
      const orderDetail = new OrderDetail({
        email: req.body.email,
        producsId: req.body.producsId,
        date: req.body.date,
        totalPrice: req.body.totalPrice,
        status: req.body.status
      });
  
      const savedOrderDetails = await orderDetail.save(); 
  
      res.status(200).json({
        code: 200,
        message: 'Order Details added successfully',
        data: savedOrderDetails 
      });
    } catch (error) {
      res.status(400).json({
        code: 400,
        message: 'Order Details was not added successfully',
        error: error.message
      });
    }
  };
  const getAllOrders = async (req, res) => {
    try {
      const data = await OrderDetail.OrderDetail({});
      res.send(data);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }

  const getOrderByClientEmail = async (req, res) => {
    try {
      const { email } = req.params;
      const ordersDetail = await OrderDetail.find({ email });
      res.json(ordersDetail);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const updateProductStatus = async (req, res) => {
    const { id } = req.params; 
    const { status } = req.body; 
  
    try {

      const updatedProduct = await OrderDetail.findByIdAndUpdate(
        id,
        { $set: { status } }, 
        { new: true } 
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      return res.status(200).json({ message: 'Product status updated successfully'});
    } catch (error) {

      return res.status(500).json({ error: 'An error occurred while updating the product status' });
    }
  };
  module.exports = {
    addOrderDetail,
    getAllOrders,
    getOrderByClientEmail,
    updateProductStatus
  }