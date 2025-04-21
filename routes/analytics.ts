import analytics from '../controllers/analytics.js'
import express, { Router } from 'express';
import auth from '../middleware/auth.js';

const router: Router = express.Router();

router.get('/analytics/fuel-usage',auth,analytics.avgFuel);
router.get('/analytics/driver-efficiency',auth,analytics.driverEfficiency);

export default router;

