const Usuario = require('../models/usuario.model');
const bcrypt = require('bcrypt');
const {validationEmail, validationPassword} = require('../../validators/validation');
const {generateSign} = require('../../jwt/jwt');


const register = async (req, res, next)=>{
   try {
    const newUser = new Usuario(req.body);
    if (!validationEmail(newUser.email)){
        res.status(400).send({code:400, message: "invalid email"});
        return next();
    }
    if (!validationPassword(newUser.password)){
        res.status(400).send({code:400, message: "invalid password"});
        return next();
    }
    const usuarios = await Usuario.find({email:newUser.email})
        if(usuarios.length > 0){
            res.status(400).send({code:400, message:'Duplicated Email'})
            return next();
        }
        newUser.password = bcrypt.hashSync(newUser.password, 10);   //encriptamos la contraseña
    const createdUser = await newUser.save();
    return res.status(200).json(createdUser);
   } catch (error) {
    return res.status(500).json(error);
   } 
}

const login = async (req, res) => {
    try {
        const myUser = await Usuario.findOne({email: req.body.email});
        if(bcrypt.compareSync(req.body.password, myUser.password)){
            const token = generateSign(myUser._id, myUser.email);
           return res.status(200).json({myUser, token});
        }else{
            res.status(400).send({code:400, message:'Password Error'})
        }
    } catch (error) {
        return res.status(500).json(error);
    }  
}


module.exports = {register, login};