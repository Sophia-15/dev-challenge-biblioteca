import { CreateBookController } from '@controllers/CreateBookController';
import { DeleteBookController } from '@controllers/DeleteBookController';
import { ListBookController } from '@controllers/ListBookController';
import { EditBookController } from '@controllers/EditBookController';

import { Router } from 'express';

const createBookController = new CreateBookController();
const listBookController = new ListBookController();
const deleteBookController = new DeleteBookController();
const editBookController = new EditBookController();

const routes = Router();

routes.get('/obras', listBookController.handle);
routes.post('/obras', createBookController.handle);
routes.delete('/obras/:id', deleteBookController.handle);
routes.put('/obras/:id', editBookController.handle);

export { routes };
