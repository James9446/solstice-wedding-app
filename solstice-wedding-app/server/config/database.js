// Import the Sequelize library
const { Sequelize } = require('sequelize');

// Load environment variables from the .env file
require('dotenv').config();

// Create a new Sequelize instance and configure it for PostgreSQL
// This uses the database credentials from your .env file
const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres', // Specify that we are using PostgreSQL
    logging: false, // Set to true to see SQL queries in the console
  }
);

// Export the configured Sequelize instance so it can be used elsewhere in the app
module.exports = sequelize;