const { User } = require("../../models");

const getUserById = () => {};

const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, email, userName } = req.body;
    const id = req.session.user.id;
  } catch (error) {
    console.log(`[ERROR]: Failed to update user | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const deleteUser = () => {};

module.exports = { getUserById, updateUser, deleteUser };
