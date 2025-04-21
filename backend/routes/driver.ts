import express, { Router } from 'express';
import driver from '../controllers/driver.js'
import auth from '../middleware/auth.js';

const router: Router = express.Router();

router.post('/drivers',auth,driver.createDriver);
router.get('/drivers',auth,driver.getDrivers);
router.put('/drivers/:id',auth,driver.updateDriver);
router.delete('/drivers/:id',auth,driver.deleteDriver);

export default router;