const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

const Books = require('./models/books');

app.use(bodyParser.json())

app.get('/books', async (_req, res) => {
  const books = await Books.getAll();
  
  return res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Books.getById(id);
  return res.status(200).json(book);
});

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});