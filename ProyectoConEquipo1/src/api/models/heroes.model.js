const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const heroesSchema = new Schema(
    {
    alias: {type: String, required: true},
    genero: {type: String, required: true},
    raza: {type: String, required: true},
    poder: {type: String, required: true},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    
    }
);

const Heroe = mongoose.model('heroes', heroesSchema);

module.exports = Heroe;


