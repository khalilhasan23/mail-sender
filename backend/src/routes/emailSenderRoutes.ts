import { Router } from 'express';
import { sendMail } from '../controllers/emailSenderController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.post('/', authMiddleware, sendMail); 

export default router;
