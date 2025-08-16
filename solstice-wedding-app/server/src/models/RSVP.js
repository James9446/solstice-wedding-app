const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const RSVP = sequelize.define('RSVP', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  status: { type: DataTypes.ENUM('attending', 'declined', 'pending'), allowNull: false, defaultValue: 'pending' },
  mealChoice: { type: DataTypes.STRING, allowNull: true },
  guestName: { type: DataTypes.STRING, allowNull: false } // To handle +1s
  // userId and eventId will be added via associations
}, { timestamps: true });

module.exports = RSVP;