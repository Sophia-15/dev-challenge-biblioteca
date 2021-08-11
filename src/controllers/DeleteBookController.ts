import { Request, Response } from 'express';
import Book from '@models/Book';

class DeleteBookController {
  async handle(req: Request, res: Response) {
    let { id } = req.params;
    if (!id) {
      id = req.body.id;
    }

    try {
      await Book.findByIdAndDelete(id);
      res.status(200).json({ success: 'Livro removido com sucesso!' });
    } catch (error) {
      res.status(404).json({ error: 'Livro não encontrado!' });
    }
  }
}

export { DeleteBookController };
