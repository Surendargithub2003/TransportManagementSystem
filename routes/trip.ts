import trip from '../controllers/TripLog.js'
import express, { Router } from 'express';

const router: Router = express.Router();

router.get('/trips',trip.getTrip);
router.post('/trips',trip.postTrip);
router.put('/trips/:id/status',trip.updateTrip);

export default router;