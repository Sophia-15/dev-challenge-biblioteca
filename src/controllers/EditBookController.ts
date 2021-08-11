import { Request, Response } from 'express';
import Book, { BookInterface } from '@models/Book';

class EditBookController {
  async handle(req: Request, res: Response) {
    const book: BookInterface = {
      title: req.body.title,
      publisher: req.body.publisher,
      authors: req.body.authors,
      photo: req.body.photo,
    };

    let { id } = req.params;
    if (!id) {
      id = req.body.id;
    }

    try {
      Book.findByIdAndUpdate(id, book);
      res.status(200).json({ success: 'Livro editado com sucesso' });
    } catch (error) {
      res.json({ error: error.message });
    }
  }
}

export { EditBookController };
