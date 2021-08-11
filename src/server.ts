import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Book from '@models/Book';
import { routes } from '@routes/book.route';

mongoose.connect('mongodb://localhost/books', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', () => {
  console.log('Houve um erro ao carregar o banco');
});
db.once('open', () => {
  console.log('Banco Carregado');
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
