const express = require('express');
const router = express.Router();

const {
  getCharById,
  login,
  postFav,
  postUser,
  deleteFav,
} = require('../controllers');

// Todas las rutas host/rickandmorty
router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/login', postUser);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;
