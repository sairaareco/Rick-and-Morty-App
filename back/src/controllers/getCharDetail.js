const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = async (req, res) => {
    const {id} = req.params;
    const response = await axios(`${URL}${id}`);
    try {
        const {id, name, species, image, gender, status, origin} = response.data;
        res.json({id, name, species, image, gender, status, origin})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports= getCharDetail;
