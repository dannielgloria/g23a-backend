// commonJS
// const myModule = require('./sample_module')

// EcmaScript modules
// import myModule from './sample_module.js'

// const result = myModule.sum(1, 2)

// console.log(result)

// ---------------------------------------------------

// Importamos el modulo con EcmaScript modules
import express from 'express';
// Inicializamos el modulo y lo guardamos en una variable (app)
const app = express();

app.use(express.json());

// Endpoint default
app.get('/', function (request, response) {
  console.log(request.query);
  response.status(200).send({mensaje: 'hola mundo'});
});

// Endpoint de users get (ejemplo)
app.get('/users', function (request, response) {
  const users = ['Camila, Felipe, Jason'];
  response.status(200).send({data: users});
});

// Endpoint de users get con params (ejemplo)
app.get('/users/:user_id', function (request, response) {
  console.log(request.params.user_id);
  response.status(200).send({mensaje: 'usuario encontrado'});
});

// Endpoint de users post (ejemplo)
app.post('/users', function (request, response) {
  if (!request.body.name) {
    response.status(400).send({error: 'Por favor envia los datos del usuario'});
  }

  const userName = request.body.name;
  console.log(userName);

  response.status(201).send({mensaje: 'usuario creado'});
});

// Endpoint de cars post
app.post('/cars', function (request, response) {
  console.log(request.body.brand);
  response.status(201).send({mensaje: 'carro creado'});
});

// Utilizamos le funcion listen del modulo para correr el servidor
// Esta funcion siempre debe estar al final
app.listen(3000, () => {
  console.log('server running 🏃🏼🏃🏼🏃🏼');
});
