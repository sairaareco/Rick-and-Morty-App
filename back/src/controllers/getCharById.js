const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
        const {id} = req.params;
        const response = await axios(`${URL}${id}`);
        try {
            const {id, name, species, image, gender} = response.data;
            res.json({id, name, species, image, gender})
        } catch (error) {
            res.status(500).json({message: error.message})
        }
}

module.exports = getCharById;

