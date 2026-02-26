import { Router } from 'express';                           // 📦 FÓRMULA
import { register, login } from '../controllers/auth.controller.js';

const router = Router();                                    // 📦 FÓRMULA

// POST /api/auth/register — sin middleware, es pública
router.post('/register', register);

// POST /api/auth/login — sin middleware, es pública
router.post('/login', login);

export default router;                                      // 📦 FÓRMULA

