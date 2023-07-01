const {Favorite} = require("../DB_connection");

const deleteFav = async (req, res) => {
    const {apiId} = req.params;
    try {
        await Favorite.destroy({ where: { apiId } });

        const favorites = await Favorite.findAll();
    
        return res.json(favorites);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = deleteFav;