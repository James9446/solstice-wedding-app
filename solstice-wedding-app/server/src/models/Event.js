const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Event = sequelize.define('Event', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATEONLY, allowNull: false },
  startTime: { type: DataTypes.TIME, allowNull: false },
  endTime: { type: DataTypes.TIME, allowNull: false },
  locationName: { type: DataTypes.STRING, allowNull: false },
  locationAddress: { type: DataTypes.STRING, allowNull: false },
  dressCode: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true }
}, { timestamps: true });

module.exports = Event;