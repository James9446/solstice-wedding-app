const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const DietaryNote = sequelize.define('DietaryNote', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: false,
    comment: 'Stores the guest\'s dietary restrictions or allergies.'
  }
  // The 'userId' foreign key will be added automatically via associations
}, {
  timestamps: true,
});

module.exports = DietaryNote;