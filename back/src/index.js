const express = require('express');
const { connection } = require('./DB_connections');
require('dotenv').config(); 
const PORT = process.env.PORT || 3001;

const server = express();

// conectarse a la DB 
connection.sync({ force: false }).then(() => {
  console.log('Database synchronized.');
});

server.listen(PORT, async () => {
    try {
        await connection.sync( {force: true} );
        console.log(`Server listening on PORT: ${PORT}`);
    } catch (error) {
     console.log('internal server error: ', error.message);   
    }
});
