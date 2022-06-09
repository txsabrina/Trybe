const express = require('express');
const routes = express.Router();

const HTTP_OK_STATUS = 200;

routes.get('/ping', (_req, res) => {
  res.status(HTTP_OK_STATUS).json({ message: pong });
})

module.exports = routes;