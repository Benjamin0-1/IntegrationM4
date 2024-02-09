const { sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
require('dotenv').config();
const favoriteModeFn = require('/models/Favorite.js'); // C
const Favorite = require('./models/Favorite');

// instanciar db para crearla

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    logging: false,
    native: false,
});

const { User, Favorites } = sequelize.models;

// aqui es donde se establecen las relaciones de muchos a muchos 

User.belongsToMany(Favorite, {through: 'user_favorite'});
Favorite.belongsToMany(User, {through: 'user_favorite'});

module.exports = {
    User,
    Favorite,
    connection: sequelize,
 };
 