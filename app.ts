import express from 'express';
import mongoose from 'mongoose';

import userRoutes from './routes/user.js';


const app = express();
app.use(express.json());

mongoose
  .connect(
    'mongodb+srv://surendarh3:tpm123@tpm.2xr5hws.mongodb.net/?retryWrites=true&w=majority&appName=tpm'
  )
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed');
  });


app.use('/api',userRoutes)

export default app;