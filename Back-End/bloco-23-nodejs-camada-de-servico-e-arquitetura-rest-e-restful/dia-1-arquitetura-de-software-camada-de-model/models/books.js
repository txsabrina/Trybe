const connection = require('./connection');

const getAll = async () => {
  const [books]  = await connection.execute('SELECT id, title, author_id FROM model_example.books;');

  return books;
};

const getById = async (id) => {
  const [books]  = await connection.execute('SELECT id, title, author_id FROM model_example.books  WHERE id=?;', [id]);

  if(books.length === 0) return null;

  const { title, author_id } = books;
  
  return {
    id,
    title,
    author_id
  }
};

module.exports = { 
  getAll,
  getById };
