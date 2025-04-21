import trip from '../controllers/TripLog.js'
import express, { Router } from 'express';
import auth from '../middleware/auth.js';
const router: Router = express.Router();

router.get('/trips',auth,trip.getTrip);
router.post('/trips',auth,trip.postTrip);
router.put('/trips/:id/status',auth,trip.updateTrip);

export default router;
