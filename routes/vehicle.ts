import vehicles from '../controllers/vehicle.js';
import express, { Router } from 'express';
import auth from '../middleware/auth.js';

const router: Router = express.Router();

router.get('/vehicles',auth,vehicles.getVehicle);
router.post('/vehicles',auth,vehicles.postVehicle);
router.put('/vehicles/:id',auth,vehicles.updateVehicle);
router.delete('/vehicles/:id',auth,vehicles.deleteVehicle);

export default router;




