
const User = require('./models/user');

async function signup(req, res) {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (user && user.password === password) {
        res.json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
//edit user
async function edit(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findByIdAndUpdate(id, req.body, { new: true });
      res.json({ user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
//////// delete user
async function deleteuser (req, res) {
    const { id } = req.params;
    try {
      await User.findByIdAndDelete(id);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
///find user by full mame
async function  finduserbyfullname(req, res) {
    const { firstName, lastName } = req.query;
    try {
      const users = await User.find({ firstName, lastName });
      res.json({ users });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
//////////////
async function  finduserbyemail(req, res) {
    const { email } = req.params;
    try {
      const user = await User.findOne({ email });
      res.json({ user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
//////////////////
async function  finduserbyid(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      res.json({ user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
module.exports = { signup, login ,edit, deleteuser,finduserbyemail,finduserbyfullname,finduserbyid};
