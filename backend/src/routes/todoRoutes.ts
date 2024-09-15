import { Router } from 'express';
//import { createTodo, getTodos } from '../controllers/todoController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.post('/', authMiddleware, /*todo*/); //todo get your methodes form your controllers and add the url you want
router.get('/', authMiddleware, /*todo*/); // and if needed change the file name according to the routers tasks

export default router;
