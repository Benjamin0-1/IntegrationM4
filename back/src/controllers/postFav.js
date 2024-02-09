const { Favorite } = require('../DB_connections');

const postFav = async (req, res) => {
  try {
    const { id, name, origin, status, image, species, gender } = req.body;

    if (![id, name, origin, status, image, species, gender].every(Boolean)) {
      return res.status(401).json({ message: "Introduce los datos obligatorios" });
    }

    await Favorite.findOrCreate({ where: { id, name, origin, status, image, species, gender } });

    const allFavorites = await Favorite.findAll();

    console.log(allFavorites);

    return res.status(200).json(allFavorites);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = postFav;
