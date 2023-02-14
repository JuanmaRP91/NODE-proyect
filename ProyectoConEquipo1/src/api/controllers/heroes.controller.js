const Heroe = require('../models/heroes.model');

const getAllHeroes = async(req, res) => {
    try {
        const myHeroe = await Heroe.find();
        return res.status(200).json(myHeroe)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const  getOneHeroe = async(req, res) => {
    try {
        const {id} = req.params;
        const myHeroe = await Heroe.findById(id);
        return res.status(200).json(myHeroe)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const  getHeroeAlias = async(req, res) => {
    try {
        const {alias} = req.params;
        if(alias){
            const myHeroe = await Heroe.find({"alias" : { $regex : RegExp(`^${alias}$`, 'i' )}});
        console.log(alias);
        return res.status(200).json(myHeroe)
        }  else{
            return res.status(404).send("tienes que enviar un titulo")
        }         
    } catch (error) {
        return res.status(500).json(error);
    }
};

const putHeroes = async (req, res) => {
    try {
        const {id} = req.params;
        const putHeroe = new Heroe(req.body);
        putHeroe._id = id;
        const updateHeroes = await Heroe.findByIdAndUpdate(id, putHeroe, {new: true}); //ponemos el new:true para que nos devuelva el nuevo objeto y no el que ha actualizado.
        return res.status(200).json(updateHeroes);
    } catch (error) {
        return res.status(500).json(error);
    }
};


const postHeroes = async (req, res) => {
    try {
        const newHeroe = new Heroe(req.body)
        const createdHeroe = await newHeroe.save();
        console.log(createdHeroe);
        return res.status(201).json(createdHeroe);
    } catch (error) {
        return res.status(500).json(error);
    }
};


const deleteHeroes = async(req, res) => {
    try {
        const id = req.params.id;
        const myHeroe = await Heroe.findByIdAndDelete(id);
        return res.status(200).json(myHeroe)
    } catch (error) {
        return res.status(500).json(error);
    }
};


module.exports = {getAllHeroes, getOneHeroe, getHeroeAlias, putHeroes, postHeroes, deleteHeroes};