const mongoose = require('mongoose');

const Movie = require('../api/models/movies.model');

const movies = [
  {
    title: 'Spiderman',
    director: 'Sam Raimi',
    year: 2002,
    genre: 'Acción/fantasía',
    heroes: '63c17ba547855ce319bf7adf'
  },
  {
    title: 'Spiderman 2',
    director: 'Sam Raimi',
    year: 2004,
    genre: 'Acción/fantasía',
    heroes: '63c17ba547855ce319bf7adf'
  },
  {
    title: 'Spiderman 3',
    director: 'Sam Raimi',
    year: 2007,
    genre: 'Acción/fantasía',
    heroes: '63c17ba547855ce319bf7adf'
  },
  {
    title: 'The Advengers',
    director: 'Joss Whedon',
    year: 2012,
    genre: 'Acción/fantasía',
    heroes: ['63c17ba547855ce319bf7ae0', '63c2d8e8c9b23de1c6c4918b', '63c2d8e8c9b23de1c6c4918a', '63c2d8e8c9b23de1c6c49189']
  },

  {
    title: 'Advengers: Age of Ultron',
    director: 'Joss Whedon',
    year: 2015,
    genre: 'Acción/fantasía',
    heroes: ['63c17ba547855ce319bf7ae0', '63c2d8e8c9b23de1c6c4918b', '63c2d8e8c9b23de1c6c4918a', '63c2d8e8c9b23de1c6c49189']
  },
  {
    title: 'Advengers infinity war',
    director: 'Ruso Brothers',
    year: 2018,
    genre: 'Acción/fantasía',
    heroes: ['63c17ba547855ce319bf7ae0' , '63c17ba547855ce319bf7adf', '63c2d8e8c9b23de1c6c4918b', '63c2d8e8c9b23de1c6c4918a', '63c2d8e8c9b23de1c6c49189']
  },
  {
    title: 'Advengers Endgame',
    director: 'Ruso Brothers',
    year: 2019,
    genre: 'Acción/fantasía',
    heroes: ['63c17ba547855ce319bf7ae0', '63c2d8e8c9b23de1c6c4918b', '63c2d8e8c9b23de1c6c4918a', '63c2d8e8c9b23de1c6c49189', '63c17ba547855ce319bf7adf']
  },
];



mongoose.set("strictQuery", false);
//Acordaos de cambiar la URL de la BBDD
mongoose.connect('mongodb+srv://root:root@cluster0.zi9i0n5.mongodb.net/ProyectoEquipo1?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    const allMovies = await Movie.find();
    if(allMovies.length > 0) {
        await Movie.collection.drop();
        console.log('Peliculas borrados');
    }
}).catch((error) => console.log("error borrando Peliculas", error))
.then(async () => {
    const movieMap = movies.map((movie) => new Movie(movie));
    await Movie.insertMany(movieMap);
    console.log("Peliculas insertados")
})
.catch((error) => console.log("error insertanto Peliculas", error))
.finally(() => mongoose.disconnect());