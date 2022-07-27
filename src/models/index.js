const Blog = require("./Blog");
const Comments = require("./Comments");
const User = require("./Comments");

// Associations

// Comments Associations

Comments.hasOne(Blog, {
  foreignKey: "blogId",
  onDelete: "CASCADE",
});

Blog.belongsToMany(Comments, {
  foreignKey: "blogId",
  onDelete: "CASCADE",
});

Comments.hasOne(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

User.belongsToMany(Comments, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

// Blogs Associations

Blog.hasOne(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

User.belongsToMany(Blog, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

module.exports = {
  Comments,
  Blog,
  User,
};
