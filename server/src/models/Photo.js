const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Photo = sequelize.define('Photo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  // URL for the full-size, optimized WebP image
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // URL for the smaller thumbnail image for gallery grid view
  thumbnailUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // The 'uploaderId' foreign key will be added via associations
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
  // We can order photos by 'createdAt' to get the "Most Recent"
});

module.exports = Photo;