const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use(require('./routes'));

const PORT = '3000';
app.listen(PORT, () => console.log("Subiu na porta 3000"));
