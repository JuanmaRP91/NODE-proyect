const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const usuarioSchema = new Schema(
    {
        email: {type: 'string', required: true},
        password: {type: 'string' , required: true}
    },{
        timestamps: true
    }
)
const Usuario = mongoose.model('usuario', usuarioSchema);

module.exports = Usuario;