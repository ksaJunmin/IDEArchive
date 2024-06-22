import { Router } from 'express';
const router = Router();
import Notification from '../db/notification.js';
import { authenticateToken } from './auth.js';

// 새로운 알림 생성
router.post('/', async (req, res) => {
  const { userId, message } = req.body;

  try {
    const notification = new Notification({
      userId,
      message
    });
    
    await notification.save();
    res.status(201).send(notification);
  } catch (err) {
    res.status(500).send(err);
  }
});

// 추가
router.get('/:userId', async (req, res) => {
    try {
      const notifications = await Notification.find({ userId: req.params.userId });
      res.send(notifications);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  

export default router;