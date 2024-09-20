import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
import todoRoutes from './routes/emailSenderRoutes';

dotenv.config();
connectDB();


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/sendMail', todoRoutes); 

export default app;
