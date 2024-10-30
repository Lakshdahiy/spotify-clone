const User = require('../models/User');

// Create user (Registration)
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const user = new User({ name, email, password });
    await user.save();

    // Respond with a success message
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error("Error in createUser:", error); // Log error for debugging
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createUser };
