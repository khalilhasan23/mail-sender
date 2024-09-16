import { Router } from 'express';
//import { createTodo, getTodos } from '../controllers/todoController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.post('/', authMiddleware, /*todo*/); 

export default router;
