import analytics from '../controllers/analytics.js'
import express, { Router } from 'express';

const router: Router = express.Router();

router.get('/analytics/fuel-usage',analytics.avgFuel);
router.get('/analytics/driver-efficiency',analytics.driverEfficiency);

export default router;