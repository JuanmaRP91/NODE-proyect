const express = require('express');
const {getAllMovies, getOneMovie, getMovieName, getMovieGenre, getMovieYear, putMovies, postMovies, deleteMovies} = require('../controllers/movies.controller');
const {isAuth} = require('../../middleware/auth');
const router = express.Router();


router.get('/',  getAllMovies);
router.get('/title/:title', getMovieName);
router.get('/title', getMovieName);
router.get('/genre/:genre', getMovieGenre);
router.get('/year/:year', getMovieYear);
router.get('/:id',  getOneMovie);
router.put('/:id', [isAuth], putMovies);
router.post('/', [isAuth], postMovies);
router.delete('/:id',[isAuth],  deleteMovies);



module.exports = router;