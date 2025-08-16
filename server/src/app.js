// Import required packages
const express = require('express');
const cors = require('cors');
const sequelize = require('../config/database');

// Import model definitions to sync them with the database
require('./models'); // This will run the index.js in the models folder

// Initialize the Express application
const app = express();

// Load environment variables
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// --- Middleware ---
// Enable Cross-Origin Resource Sharing (CORS) for all routes
// This allows your frontend (on a different origin) to make requests to this backend
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(express.json());

// --- Routes ---
// A simple test route to confirm the server is working
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running and healthy!' });
});

// --- Database Synchronization and Server Start ---
// This function will connect to the database and start the server
const startServer = async () => {
  try {
    // Authenticate the database connection
    await sequelize.authenticate();
    console.log('✅ Database connection has been established successfully.');

    // Sync all defined models to the database.
    // { alter: true } will check the current state of the table in the database 
    // and then perform the necessary changes in the table to make it match the model.
    // Avoid using { force: true } in production as it will drop tables.
    await sequelize.sync({ alter: true });
    console.log('✅ All models were synchronized successfully.');

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`🚀 Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('❌ Unable to connect to the database or start the server:', error);
  }
};

// Run the server setup function
startServer();