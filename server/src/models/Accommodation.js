const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Accommodation = sequelize.define('Accommodation', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  bookingLink: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true, // Ensures this is a valid URL
    },
  },
  pricePoint: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: 'e.g., $, $$, $$$'
  }
}, {
  timestamps: true,
});

module.exports = Accommodation;