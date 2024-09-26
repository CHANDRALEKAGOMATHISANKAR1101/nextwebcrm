const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authorizeRoles = require('../middleware/roleAuth');
 
// Create a new user (Only Super Admin can create Admin or Client)
router.post('/', authorizeRoles('Super Admin'), async (req, res) => {
  const { name, email, password, role } = req.body;
 
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
 
    user = new User({
      name,
      email,
      password,
      role,
    });
 
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
 
    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };
 
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});
 
// Get all users (Only Admin or Super Admin)
router.get('/', authorizeRoles('Super Admin', 'Admin'), async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});
 
// Update a user's role (Only Super Admin)
router.put('/:id', authorizeRoles('Super Admin'), async (req, res) => {
  const { role } = req.body;
 
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
 
    user.role = role;
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});
 
// Delete a user (Only Super Admin)
router.delete('/:id', authorizeRoles('Super Admin'), async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
 
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
 
    await user.remove();
    res.json({ msg: 'User removed' });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
});
 
module.exports = router;