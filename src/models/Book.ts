import { Schema, model, Document } from 'mongoose';

export interface BookInterface extends Document {
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

export default model<BookInterface>('Book', BookSchema);
