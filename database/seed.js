// database/seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User'); // Ensure this path is correct based on your structure
const connectDB = require('./mongoSetup');

dotenv.config();

// Initial user data
const users = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123', // In a real app, hash this password
    role: 'Admin',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123', // In a real app, hash this password
    role: 'Client',
  },
  {
    name: 'Mark Johnson',
    email: 'mark@example.com',
    password: 'password123', // In a real app, hash this password
    role: 'Employee',
  },
];

// Seed the database
const seedDatabase = async () => {
  await connectDB();

  try {
    // Clear existing data
    await User.deleteMany({});
    console.log('Existing users cleared.');

    // Insert new data
    await User.insertMany(users);
    console.log('Database seeded with users.');

    process.exit();
  } catch (error) {
    console.error(`Error seeding database: ${error.message}`);
    process.exit(1);
  }
};

// Run the seeding script
seedDatabase();
