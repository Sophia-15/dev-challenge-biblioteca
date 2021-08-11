import Book from '@models/Book';
import { Request, Response } from 'express';

class CreateBookController {
  async handle(req: Request, res: Response) {
    const book = new Book(req.body);

    try {
      const bookCreated = book.save();
      res.status(200).json({ success: 'Livro adicionado com sucesso!' });
    } catch (error) {
      res.send(error);
    }
  }
}

export { CreateBookController };
