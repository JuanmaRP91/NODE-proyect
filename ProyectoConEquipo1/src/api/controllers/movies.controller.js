const Movie = require('../models/movies.model');


const getAllMovies = async(req, res) => {
    try {
        const myMovie = await Movie.find().populate('heroes');
        return res.status(200).json(myMovie)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const  getOneMovie = async(req, res) => {
    try {
        const {id} = req.params;    
        const myMovie = await Movie.findById(id).populate('heroes');
        return res.status(200).json(myMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const  getMovieName = async(req, res) => {
    try {
        const {title} = req.params;
        if(title){
            const myMovie = await Movie.find({"title" : { $regex : RegExp(`^${title}$`, 'i' )}}).populate('heroes');
        console.log(title);
        return res.status(200).json(myMovie)
        }  else{
            return res.status(404).send("tienes que enviar un titulo")
        }         
    } catch (error) {
        return res.status(500).json(error);
    }
};

const  getMovieGenre = async(req, res) => {
    try {
        const {genre} = req.params;
        if(genre){
            const myMovie = await Movie.find({"genre" : { $regex : RegExp(`^${genre}$`, 'i' )}}).populate('heroes');
        console.log(genre);
        return res.status(200).json(myMovie)
        }  else{
            return res.status(400).send("tienes que enviar un titulo")
        }         
    } catch (error) {
        return res.status(500).json(error);
    }
};

const  getMovieYear = async(req, res) => {
    try {
        const {year} = req.params;
        if(year){
            const myYearMovie = await Movie.find({ year: {$gt:2010} }).populate('heroes');
        return res.status(200).json(myYearMovie)
        }  else{
            return res.status(400).send("tienes que enviar un año")
        }         
    } catch (error) {
        return res.status(500).json(error);
    }
};

const putMovies = async (req, res) => {
    try {
        const {id} = req.params;
        const putMovie = new Movie(req.body);
        putMovie._id = id;
        const updateMovies = await Movie.findByIdAndUpdate(id, putMovie, {new: true}); //ponemos el new:true para que nos devuelva el nuevo objeto y no el que ha actualizado.
        return res.status(200).json(updateMovies);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const postMovies = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        const createdMovie = await newMovie.save();
        console.log(createdMovie);
        return res.status(201).json(createdMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
};


const deleteMovies = async(req, res) => {
    try {
        const id = req.params.id;
        const myMovie = await Movie.findByIdAndDelete(id);
        return res.status(200).json(myMovie)
    } catch (error) {
        return res.status(500).json(error);
    }
};






module.exports = {getAllMovies, getOneMovie, getMovieName, getMovieGenre, getMovieYear, putMovies, postMovies, deleteMovies};