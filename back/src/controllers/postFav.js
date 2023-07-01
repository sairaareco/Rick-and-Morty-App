const {Favorite} = require("../DB_connection");

const postFav = async (req, res) => {
    const  {id, name, gender, species, image}  = req.body.character
    if (!id || !name || !species || !gender || !image) {
        return res.status(400).json({ message: 'Faltan datos' });
    }
    try {
            await Favorite.findOrCreate({
                where: { apiId: id },
                defaults: { name, gender, species, image } 
        });

        const favorites = await Favorite.findAll();

        return res.json(favorites);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = postFav;
