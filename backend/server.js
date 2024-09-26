const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();
 
// Database connection
const connectDB = require('./config/db');
connectDB();
 
// Initialize the app
const app = express();
app.use(cors());
app.use(express.json());
 
// Import routes
// const userRoutes = require('./routes/users');
// const planRoutes = require('./routes/plan');
// const metricsRoutes = require('./routes/metrics');
const tasks = require('./routes/tasks');
app.use('/api/tasks', tasks);

const users = require('./routes/users');
app.use('/api/users', users);
// Define routes
// app.use('/api/users', userRoutes);
// app.use('/api/plans', planRoutes);
// app.use('/api/metrics', metricsRoutes);
 

// Set the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});