import express from 'express';
import cors from 'cors';
import { register, login, logout } from '../controllers/auth.controller.js';

const router = express.Router();

// Apply CORS middleware specifically to authRoute
router.use(cors({
    origin: 'https://t-work-prototype.vercel.app',
    credentials: true,
}));

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

export default router;
