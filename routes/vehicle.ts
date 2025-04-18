import vehicles from '../controllers/vehicle.js';
import express, { Router } from 'express';

const router: Router = express.Router();

router.get('/vehicles',vehicles.getVehicle);
router.post('/vehicles',vehicles.postVehicle);
router.put('/vehicles/:id',vehicles.updateVehicle);
router.delete('/vehicles/:id',vehicles.deleteVehicle);

export default router;