import User from '../db/user.js'
import { Router } from 'express';
const router = Router();

import jwt from 'jsonwebtoken';

/*
const authMiddleware = async (req, res, next) => {
  const token = req.header('x-auth-token');
  
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret'); // Replace 'your_jwt_secret' with your actual secret
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
*/
router.post('/increase-points',  async (req, res) => {
    try {
      const userId = req.user._Id; // Assuming user ID is available in the auth middleware
  
      // Find the user and update the points
      const user = await User.findByIdAndUpdate(
        userId,
        { $inc: { point: 100 } },
        { new: true }
      );
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'Points increased successfully', point: user.point });
    } catch (error) {
      res.status(500).json({ message: 'Error increasing points', error });
    }
  });
  
  export default router;