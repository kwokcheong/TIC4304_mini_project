const { User } = require('../models');

const showUsers = async (req, res) => {
  try {
    const listOfUsers = await User.findAll();

    const formattedResponse = listOfUsers.map((val) => {
      return {
        name: String(val.name)
      };
    });

    res.json({ data: formattedResponse });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(JSON.stringify(req.body))
    
    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
    });

    res.status(201).json({ data: newUser });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  showUsers,
  addUser,
};