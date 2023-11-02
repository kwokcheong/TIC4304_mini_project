const { User } = require("../models");
const db = require("../models");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    req.session.user = { name: user.name, email: user.email };
    await req.session.save((err) => {
      if (err) {
        console.error("Session save error:", err);
        return res.status(500).json({ error: "Server error" });
      }

      console.log(req.session);
      res.json({ data: { id: user.id, email: user.email } });
    });
  } catch (error) {
    console.error("Sequelize error:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const logout = async (req, res) => {
  req.session.destroy();
  res.json({ data: "Logged out" });
};

const status = async (req, res) => {
  if (req.session && req.session.user) {
    res.json({ loggedIn: true, user: req.session.user });
  } else {
    res.json({ loggedIn: false });
  }
};

module.exports = {
  login,
  logout,
  status,
};
