import { Router } from 'express';
const router = Router();
import Notification from '../db/notification.js';
import { authenticateToken } from './auth.js';


router.get('/', authenticateToken, async (req, res) => {
    try {
      const notifications = await Notification.find({ userId: req.user.userId }).populate('request');
      res.send(notifications);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  

export default router;