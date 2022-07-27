const Blog = require("./Blog");
const Comments = require("./Comments");
const User = require("./User");

// Associations

// Comments Associations

Blog.hasMany(Comments, {
  foreignKey: "blogId",
  onDelete: "CASCADE",
});

Comments.belongsTo(Blog, {
  foreignKey: "blogId",
  onDelete: "CASCADE",
});

User.hasMany(Comments, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Comments.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

// Blogs Associations

User.hasMany(Blog, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Blog.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

module.exports = {
  Comments,
  Blog,
  User,
};
