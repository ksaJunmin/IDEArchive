import { Router } from 'express';
const router = Router();
import Post from '../models/post';

// Create a new post
router.post('/add', async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content });
  
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;