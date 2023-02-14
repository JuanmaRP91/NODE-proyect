const express = require('express');
const {  getAllHeroes, getOneHeroe, getHeroeAlias, putHeroes, postHeroes, deleteHeroes } = require('../controllers/heroes.controller');
const {isAuth} = require('../../middleware/auth');
const router = express.Router();



router.get('/',  getAllHeroes);
router.get('/:id',  getOneHeroe);
router.get('/alias/:alias',  getHeroeAlias);
router.post('/',  [isAuth], postHeroes);
router.put('/:id', [isAuth], putHeroes);
router.delete('/:id', [isAuth],  deleteHeroes);


module.exports = router;