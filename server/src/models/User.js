const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
  password: { type: DataTypes.STRING, allowNull: true }, // For optional password recovery
  name: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM('guest', 'admin'), allowNull: false, defaultValue: 'guest' }
}, { timestamps: true });

module.exports = User;