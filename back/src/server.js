const {router} = require("./routes/index");
const express = require('express');
const cors = require("cors")
const server = express();
const PORT = 3001;
const { conn } = require('./DB_connection');

server.use(express.json())
server.use(cors())
server.use("/rickandmorty", router)

server.listen(PORT, () => {
   conn.sync({force: true})
   console.log('Server raised in port ' + PORT);
});

