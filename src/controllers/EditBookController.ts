import { Request, Response } from 'express';
import Book from '@models/Book';

interface BookInterface {
  title: string;
  publisher: string
  photo: string;
  authors: string;
}

class EditBookController {
  async handle(req: Request, res: Response) {
    const book: BookInterface = {
      title: req.body.title,
      publisher: req.body.publisher,
      authors: req.body.authors,
      photo: req.body.photo,
    };

    const { id } = req.params;

    if (req.body.id && !req.body.title || !req.body.publisher || !req.body.photo || !req.body.authors) {
      res.status(400).json({ error: 'Insira todos os dados' });
    } else {
      try {
        await Book.findByIdAndUpdate(id, book);
        res.status(200).json({ success: 'Livro editado com sucesso' });
      } catch (error) {
        res.json({ error: error.message });
      }
    }
  }
}

export { EditBookController };
