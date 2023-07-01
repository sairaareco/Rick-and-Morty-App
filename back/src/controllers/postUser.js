const {User} = require("../DB_connection");

const postUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Faltan datos' });
    }
try {
    const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { password }
    });
    if (!created) {
        return res.status(400).json({message: "Usuario ya registrado"});
    }
    return res.json(user);
} catch (error) {
    return res.status(500).json({ message: error.message });
    }
}

module.exports = postUser;
