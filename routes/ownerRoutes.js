const express = require('express');
const app = express();
const Owner = require('../models/owner'); 
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.use(express.json());
require('dotenv').config(); 
const { jwtSecretKey } = require('../config/config'); 

app.post('/owners/signup', async (req, res) => {
  try {
    
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newOwner = await Owner.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    const token = jwt.sign({ ownerId: newOwner._id }, jwtSecretKey, { expiresIn: '1h' });

    res.status(201).json({ owner: newOwner, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/owners/login', async (req, res) => {
    const { email, password } = req.body;
  
    const user = await Owner.findOne({ email });
  
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
  
    const token = jwt.sign({ userId: user._id }, jwtSecretKey, { expiresIn: '1h' });
    res.json({ token });
  });



const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized - Token not provided' });
    }
  
    try {
      const decoded = jwt.verify(token, jwtSecretKey);
      req.ownerId = decoded.ownerId;
      next();
    } catch (error) {
      return res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }
  };

  
// Update owner profile 
app.put('owners/profile', verifyToken, async (req, res) => {
    try {
      const ownerId = req.ownerId;
      const { name, email, newPassword } = req.body;
  
      const owner = await Owner.findById(ownerId);
  
      if (!owner) {
        return res.status(404).json({ error: 'Owner not found' });
      }
  
      owner.name = name || owner.name;
      owner.email = email || owner.email;
  
      if (newPassword) {
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        owner.password = hashedPassword;
      }
  
      await owner.save();
  
      res.json({ message: 'Owner profile updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
