import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
import todoRoutes from './routes/todoRoutes';

dotenv.config();
connectDB();


const app = express();

app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000' // or your frontend URL
//  }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes); //todo change it to fit your web applicaton

export default app;
