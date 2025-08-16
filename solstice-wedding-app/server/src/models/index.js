const User = require('./User');
const Event = require('./Event');
const RSVP = require('./RSVP');
const DietaryNote = require('./DietaryNote');
const Photo = require('./Photo');
const Comment = require('./Comment');
const Upvote = require('./Upvote');
const Accommodation = require('./Accommodation');

// User Relationships
User.hasMany(RSVP, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.hasOne(DietaryNote, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.hasMany(Photo, { as: 'uploadedPhotos', foreignKey: 'uploaderId', onDelete: 'CASCADE' });
User.hasMany(Comment, { as: 'comments', foreignKey: 'authorId', onDelete: 'CASCADE' });

// Event Relationships
Event.hasMany(RSVP, { foreignKey: 'eventId', onDelete: 'CASCADE' });

// RSVP Relationships
RSVP.belongsTo(User, { foreignKey: 'userId' });
RSVP.belongsTo(Event, { foreignKey: 'eventId' });

// DietaryNote Relationship
DietaryNote.belongsTo(User, { foreignKey: 'userId' });

// Photo Relationships
Photo.belongsTo(User, { as: 'uploader', foreignKey: 'uploaderId' });
Photo.hasMany(Comment, { foreignKey: 'photoId', onDelete: 'CASCADE' });

// Comment Relationships
Comment.belongsTo(User, { as: 'author', foreignKey: 'authorId' });
Comment.belongsTo(Photo, { foreignKey: 'photoId' });

// Many-to-Many Relationship for Upvotes (User <-> Photo)
User.belongsToMany(Photo, { through: Upvote, as: 'upvotedPhotos', foreignKey: 'userId' });
Photo.belongsToMany(User, { through: Upvote, as: 'upvoters', foreignKey: 'photoId' });

module.exports = { User, Event, RSVP, DietaryNote, Accommodation, Photo, Comment, Upvote };