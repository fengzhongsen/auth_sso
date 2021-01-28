const db = require('../lib/db');

const Message = require('./message.js');
const Account = require('./account.js');
const Image = require('./image.js');
const User = require('./user.js');
const Friendship = require('./friendship');

User.hasMany(Account);
Account.belongsTo(User);

User.hasMany(Message);
Message.belongsTo(User);

Message.hasMany(Image);
Image.belongsTo(Message);

User.belongsToMany(User, {
  as: 'followed',
  through: Friendship
});

db.sync({ force: false });

module.exports = {
  Message,
  Account,
  Image,
  User,
  Friendship,
};
