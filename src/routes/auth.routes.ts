import { Router } from 'express';
import { login, register, refreshToken, forgotPassword, resetPassword, getWardens } from '../controllers/auth.controller';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.post('/refresh-token', refreshToken);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.get('/wardens', authenticateToken, getWardens);

export default router;
