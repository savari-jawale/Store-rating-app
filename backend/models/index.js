const sequelize = require('../config/db');
const User = require('./User');
const Store = require('./Store');
const Rating = require('./Rating');

// Associations
User.hasMany(Rating);
Rating.belongsTo(User);

Store.hasMany(Rating);
Rating.belongsTo(Store);

User.hasMany(Store, { foreignKey: 'ownerId' });
Store.belongsTo(User, { foreignKey: 'ownerId' });

module.exports = { sequelize, User, Store, Rating };
