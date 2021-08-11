import Book from '@models/Book';
import { Request, Response } from 'express';

class ListBookController {
  async handle(req: Request, res: Response) {
    try {
      const allBooks = await Book.find({});
      res.send(allBooks);
    } catch (error) {
      console.log(error);
    }
  }
}

export { ListBookController };
