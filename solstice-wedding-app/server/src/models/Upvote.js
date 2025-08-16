const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Upvote = sequelize.define('Upvote', {
  // We define the foreign keys directly here for clarity
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', // table name
      key: 'id'
    },
    primaryKey: true // Part of the composite primary key
  },
  photoId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Photos', // table name
      key: 'id'
    },
    primaryKey: true // Part of the composite primary key
  }
}, {
  timestamps: false // No need for createdAt/updatedAt on a simple join table
});

module.exports = Upvote;