const express = require("express");
const router = express.Router();


const{
    addClient,
    getAllClients,
    deleteClientById,
    clientLogin,
    getClientByEmail

}= require("../controllers/clientController");

router.post("/addClient", addClient);
router.get("/getAllClients", getAllClients);
router.get("/clientLogin/:email/:password", clientLogin);
router.delete("/deleteClientById/:id", deleteClientById);
router.get("/getClientByEmail/:email", getClientByEmail);
module.exports = router;