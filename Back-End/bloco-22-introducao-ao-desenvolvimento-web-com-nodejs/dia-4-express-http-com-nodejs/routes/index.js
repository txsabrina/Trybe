const express = require('express');
const routes = express.Router();

const validationAge = require('../middlewares/validationAge');

const HTTP_OK_STATUS = 200;

routes.get('/ping', (_req, res) => {
  res.status(HTTP_OK_STATUS).json({ "message": "pong" });
});

routes.post('/hello', (req, res) => {
  const { name } = req.body;

  res.status(HTTP_OK_STATUS).json({ "message": `Hello,${name} !`});
});

routes.post('/greetings', validationAge, (req, res) => {
  const { name, age } = req.body;

  res.status(HTTP_OK_STATUS).json({ "message": `Hello,${name} !`});

});

routes.put('/users/:name/:age', (req, res) =>{
  const { name, age } = req.body;

  res.status(HTTP_OK_STATUS).json({"message": `Seu nome é ${name} e você tem ${age} anos de idade` })
})


module.exports = routes;