import User from '../db/user.js'
import { Router } from 'express';
const router = Router();
import { authenticateToken } from './auth.js';

router.post('/increase-points',  async (req, res) => {
    try {
      const userId = req.user._id; // Assuming user ID is available in the auth middleware
  
      // Find the user and update the points
      const user = await User.findByIdAndUpdate(
        userId,
        { $inc: { points: 100 } },
        { new: true }
      );
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'Points increased successfully', point: user.points });
    } catch (error) {
      res.status(500).json({ message: 'Error increasing points', error });
    }
  });
  
  export default router;