const express = require('express');
const dotenv = require('dotenv');

const moviesRouter = require('./src/api/routes/movies.routes');

const usuariosRouter = require('./src/api/routes/usuario.routes');

const heroesRouter = require('./src/api/routes/heroes.routes');

dotenv.config();
const {connect} = require('./src/utils/database');
const PORT = process.env.PORT || 5000;
const app = express();
connect();

app.use(express.json());        //esto se pone siempre para que lea json del body
app.use(express.urlencoded({extended: true})); //esto se pone siempre para que lea json del body


app.use('/heroes', heroesRouter);
app.use('/usuarios', usuariosRouter);
app.use('/movies', moviesRouter);
app.use('*', (req,res,next) => {  return res.status(404).json("Route not found")  })
app.listen(PORT, () => console.log('listening on port ', PORT));