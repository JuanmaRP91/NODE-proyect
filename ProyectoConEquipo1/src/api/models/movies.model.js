const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const moviesSchema = new Schema(
    {
        title: {type: 'string', required: true},
        year: {type: 'number'},
        genre: {type: 'string'},
        director: {type: 'string'},
        heroes: [{type:Schema.Types.ObjectId, ref:"heroes"}]
    },{
        timestamps: true
    }
)
const Movie = mongoose.model('movies', moviesSchema);

module.exports = Movie;