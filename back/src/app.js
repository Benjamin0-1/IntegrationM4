const express = require('express');
const server = express();
const morgan = require('morgan');
//const router = require('./routes');

server.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
     );
     res.headerres.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
     );
     next();
});

server.use(express.json());
server.use('/rickandmorty', router); // cada vez que se vaya a la ruta que empiece con /rickandmorty se llama al router.

module.exports = server;
