import { Request, Response } from 'express';
import Driver from '../models/driver.js';

const createDriver = async (req: Request, res: Response) => {
    try {
      const driver = new Driver(req.body);
      await driver.save();
      res.status(201).json(driver);
    } catch (error: any) {
      res.status(500).json({ message: 'Error creating driver', error: error.message });
    }
  };

  const getDrivers = async (req: Request, res: Response) => {
    try {
      const drivers = await Driver.find().populate('assignedVehicle');
      res.status(200).json(drivers);
    } catch (error: any) {
      res.status(500).json({ message: 'Error fetching drivers', error: error.message });
    }
  };

  const updateDriver = async (req: Request, res: Response) => {
    try {
      const driver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!driver) {
        return res.status(404).json({ message: 'Driver not found' });
      }
      res.status(200).json(driver);
    } catch (error: any) {
      res.status(500).json({ message: 'Error updating driver', error: error.message });
    }
  };

  const deleteDriver = async (req: Request, res: Response) => {
    try {
      const driver = await Driver.findByIdAndDelete(req.params.id);
      if (!driver) {
        return res.status(404).json({ message: 'Driver not found' });
      }
      res.status(200).json({ message: 'Driver deleted successfully' });
    } catch (error: any) {
      res.status(500).json({ message: 'Error deleting driver', error: error.message });
    }
};

export default {createDriver,getDrivers,updateDriver,deleteDriver}