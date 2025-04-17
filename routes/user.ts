
import express, { Router } from 'express';
import users from '../controllers/user.js';
import vehicles from '../controllers/vehicle.js';
import driver from '../controllers/driver.js'
import trip from '../controllers/TripLog.js'
import analytics from '../controllers/analytics.js'


const router: Router = express.Router();

router.post('/auth/register', users.registerUser);
router.post('/auth/login', users.loginUser);

router.post('/drivers',driver.createDriver);
router.get('/drivers',driver.getDrivers);
router.put('/drivers/:id',driver.updateDriver);
router.delete('/drivers/:id',driver.deleteDriver)

router.get('/vehicles',vehicles.getVehicle);
router.post('/vehicles',vehicles.postVehicle);
router.put('/vehicles/:id',vehicles.updateVehicle);
router.delete('/vehicles/:id',vehicles.deleteVehicle);

router.get('/trips',trip.getTrip);
router.post('/trips',trip.postTrip);
router.put('/trips/:id/status',trip.updateTrip);

router.get('/analytics/fuel-usage',analytics.avgFuel);
router.get('/analytics/driver-efficiency',analytics.driverEfficiency);



export default router;