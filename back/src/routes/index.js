const {Router} = require("express");

const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const deleteFav = require("../controllers/deleteFav")
const login = require("../controllers/login")
const postFav = require("../controllers/postFav")
const postUser = require("../controllers/postUser")

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);
router.get("/login", login);
router.post("/login/post", postUser);
router.post("/fav", postFav);
router.delete("/fav/:apiId", deleteFav);

module.exports = {
    router
};

