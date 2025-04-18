import express, { Router } from 'express';
import driver from '../controllers/driver.js'

const router: Router = express.Router();

router.post('/drivers',driver.createDriver);
router.get('/drivers',driver.getDrivers);
router.put('/drivers/:id',driver.updateDriver);
router.delete('/drivers/:id',driver.deleteDriver);

export default router;