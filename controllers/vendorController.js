const Vendor= require("../models/vendors");


const addVendor = async (req, res) => {
    try {
      const vendor = new Vendor({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        company: req.body.company,
        password: req.body.password
      });
  
      const savedVendor = await vendor.save(); 
  
      res.status(200).json({
        code: 200,
        message: 'Vendor added successfully',
        data: savedVendor 
      });
    } catch (error) {
      res.status(400).json({
        code: 400,
        message: 'Vendor was not added successfully',
        error: error.message
      });
    }
  };
  
  const getAllVendors = async (req, res) => {
    try {
      const data = await Vendor.find({});
      res.send(data);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }

  const getVendorByNameAndLastName = async (req, res) => {
    try {
      const { name, lastName } = req.params;
      const vendors = await Vendor.find({ name, lastName });
  
      if (vendors.length > 0) {
        res.json(vendors);
      } else {
        res.status(404).json({ message: 'Vendors not found for the provided name and last name' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const deleteVendorById= async (req, res) => {
    try {
      const { id } = req.params; 
      const deletedVendor = await Vendor.deleteOne({ _id: id });
      res.status(200).json({
        success: true,
        message: "Vendor deleted successfully",
        projects: deletedVendor,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Error occurred while deleting the product",
        error: error,
      });
    }
  };
  const updateVendorByEmail = async (req, res) => {
    try {
      const { email } = req.params; 
  
      const updatedVendor = await Vendor.findOneAndUpdate(
        { email },
        { $set: req.body }, 
        { new: true } 
      );
  
      if (updatedVendor) {
        res.status(200).json({
          success: true,
          message: "Vendor updated successfully",
          vendor: updatedVendor,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Vendor not found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Error occurred while updating the vendor",
        error: error.message,
      });
    }
  };
  
  
  const vendorLogin = async (req, res) => {
    try {
      const { email, password } = req.params;
      const vendors = await Vendor.find({ email, password });
  
      if (vendors.length > 0) {
        res.json(vendors);
      } else {
        res.status(404).json({ message: 'Vendors not found for the provided email and password' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  const getVendorNameByEmail = async (req, res) => {
    try {
      const { email } = req.params;
      const vendor = await Vendor.findOne({ email }); // Using findOne instead of find to get a single vendor
  
      if (vendor) {
        const { name , lastName} = vendor; // Assuming 'name' is the field in the Vendor schema
        res.json({ name, lastName , email }); // Return the name and email in the response
      } else {
        res.status(404).json({ message: 'Vendor not found for the provided email' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const getVendorByEmail = async (req, res) => {
    try {
      const { email } = req.params;
      const vendors = await Vendor.find({ email });
  
      if (vendors.length > 0) {
        res.json(vendors);
      } else {
        res.status(404).json({ message: 'Vendors not found for the provided email' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
    addVendor,
    getAllVendors,
    getVendorByNameAndLastName,
    deleteVendorById,
    updateVendorByEmail,
    vendorLogin,
    getVendorNameByEmail,
    getVendorByEmail
  }