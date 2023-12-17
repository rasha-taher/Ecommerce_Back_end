const Client= require("../models/client");

const addClient = async (req, res) => {
    try {
      const client = new Client({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
      });
  
      const savedclient = await client.save(); 
  
      res.status(200).json({
        code: 200,
        message: 'client added successfully',
        data: savedclient 
      });
    } catch (error) {
      res.status(400).json({
        code: 400,
        message: 'Client was not added successfully',
        error: error.message
      });
    }
  };

  const getAllClients = async (req, res) => {
    try {
      const data = await Clients.find({});
      res.send(data);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }

  const deleteClientById= async (req, res) => {
    try {
      const { id } = req.params; 
      const deletedClient = await Client.deleteOne({ _id: id });
      res.status(200).json({
        success: true,
        message: "Client deleted successfully",
        projects: deletedClient,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Error occurred while deleting the product",
        error: error,
      });
    }
  };
  const clientLogin = async (req, res) => {
    try {
      const { email, password } = req.params;
      const clients = await Client.find({ email, password });
      res.json(clients);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const getClientByEmail = async (req, res) => {
    try {
      const { email } = req.params;
      const clients = await Client.find({ email });
      res.json(clients);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  module.exports = {
    addClient,
    getAllClients,
    deleteClientById,
    clientLogin,
    getClientByEmail
  }