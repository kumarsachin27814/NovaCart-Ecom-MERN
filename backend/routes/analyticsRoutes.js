import express from 'express';
import protect from '../middleware/authMiddleware.js';
import admin from '../middleware/adminMiddleware.js';
import { getAdminStats } from '../controller/analyticsController.js';

const router = express.Router();

router.get('/', protect , admin , getAdminStats);

export default router;