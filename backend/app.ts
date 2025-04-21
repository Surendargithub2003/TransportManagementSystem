import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRoutes from './routes/user.js';
import vehicleRoutes from './routes/vehicle.js';
import driverRoutes from './routes/driver.js';
import tripRoutes from './routes/trip.js';
import analyticsRoutes from './routes/analytics.js';

dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed');
  });

app.use('/api',userRoutes);
app.use('/api',vehicleRoutes);
app.use('/api',driverRoutes);
app.use('/api',tripRoutes);
app.use('/api',analyticsRoutes);

export default app;