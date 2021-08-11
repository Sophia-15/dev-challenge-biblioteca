import { Schema, model, Document } from 'mongoose';

interface BookInterfaceSchema extends Document {
  title: string;
  publisher: string
  photo: string;
  authors: string;
}

const BookSchema = new Schema({
  title: { type: String, required: true },
  publisher: { type: String, required: true },
  photo: { type: String, required: true },
  authors: { type: String, required: true },
});

export default model<BookInterfaceSchema>('Book', BookSchema);
