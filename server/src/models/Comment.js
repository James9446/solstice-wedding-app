const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  // 'authorId' and 'photoId' foreign keys will be added via associations
}, {
  timestamps: true,
});

module.exports = Comment;