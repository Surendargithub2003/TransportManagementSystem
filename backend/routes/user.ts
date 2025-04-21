
import express, { Router } from 'express';
import users from '../controllers/user.js';

const router: Router = express.Router();

router.post('/auth/register', users.registerUser);
router.post('/auth/login', users.loginUser);

export default router;