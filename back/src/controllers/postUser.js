const { User } = require('../DB_connections');

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Faltan datos obligatorios' });
    }

    const [user, created] = await User.findOrCreate({ where: { email, password } });

    return res.status(created ? 201 : 200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;
