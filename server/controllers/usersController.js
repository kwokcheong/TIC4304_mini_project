const { User } = require("../models");
const db = require("../models");
const bcrypt = require("bcrypt");

const showUsers = async (req, res) => {
  try {
    console.log(req.session.user);
    const listOfUsers = await User.findAll();

    const formattedResponse = listOfUsers.map((val) => {
      return {
        name: String(val.name),
      };
    });

    res.json({ data: formattedResponse });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const findUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.query.id } });

    res.json({ data: user });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// This is intentionally vulnerable to SQL injection attacks
const findUserByRawSQL = async (req, res) => {
  try {
    const user = await db.sequelize.query(
      `SELECT * FROM Users WHERE id = ${req.query.id}`
    );

    res.json({ data: user[0] });
  } catch (error) {
    console.error("Sequelize error:", error); // Log Sequelize error
    res.status(500).json({ error: "Server error" });
  }
};

const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({ data: newUser });
  } catch (error) {
    console.error("Sequelize error:", error); // Log Sequelize error
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  showUsers,
  addUser,
  findUser,
  findUserByRawSQL,
};
