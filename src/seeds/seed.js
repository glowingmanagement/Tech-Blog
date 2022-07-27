const connection = require("../config/connection");

const { User, Comments, Blog } = require("../models");

const user = require("./user.json");
const blog = require("./blog.json");
const comments = require("./comments.json");

const seedUser = async () => {
  console.log("HERE2");
  const promises = user.map((user) => User.create(user));
  await Promise.all(promises);
  console.log("✔️ Successfully seeded Users");
};

const seedBlog = async () => {
  console.log("HERE3");
  const promises = blog.map((blog) => Blog.create(blog));
  await Promise.all(promises);
  console.log("✔️ Successfully seeded Blogs");
};

const seedComments = async () => {
  console.log("HERE4");
  const promises = comments.map((comments) => Comments.create(comments));
  await Promise.all(promises);
  console.log("✔️ Successfully seeded Comments");
};

const init = async () => {
  try {
    console.log("Seeding database...");
    await connection.sync({ force: true });

    await seedUser();

    console.log("HERE1");

    await seedBlog();

    await seedComments();

    console.log("✔️ Seeding Complete!");
  } catch (error) {
    console.log(`[ERROR]: Failed to seed | ${error.message}`);
  }
  process.exit(0);
};

init();
