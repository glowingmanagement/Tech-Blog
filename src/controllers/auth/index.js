const { User } = require("../../models");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      const isAuthorised = await user.checkPassword(password);

      if (isAuthorised) {
        req.session.save(() => {
          req.session.isLoggedIn = true;
          req.session.user = user.getUser();

          return res.json({ success: true });
        });
      } else {
        console.log(
          `[ERROR]: Failed to login | Incorrect password for email: ${email}`
        );
        return res.status(500).json({ success: false });
      }
    } else {
      console.log(
        `[ERROR]: Failed to login | No user found with email: ${email}`
      );

      return res.status(500).json({ success: false });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to login | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const signUp = async (req, res) => {
  try {
    const { firstName, lastName, userName, email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user) {
      console.log(
        `[ERROR]: Failed to create user | Account already exists with email: ${email}`
      );

      return res.status(500).json({ success: false });
    } else if (!firstName || !lastName || !email || !password || !userName) {
      return res.status(404).json({ success: false });
    } else {
      await User.create({
        firstName,
        lastName,
        userName,
        email,
        password,
      });
      return res.status(500).json({ success: true });
    }
  } catch (error) {
    console.log(`[ERROR]: Failed to create user | ${error.message}`);

    return res.status(500).json({ success: false });
  }
};

const logout = (req, res) => {
  if (req.session.isLoggedIn) {
    req.session.destroy(() => {
      return res.status(204).end();
    });
  } else {
    return res.status(404).end();
  }
};

module.exports = {
  login,
  signup,
  logout,
};
