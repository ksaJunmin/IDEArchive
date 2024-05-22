import { Router } from 'express';
const router = Router();
import Post from '../db/post.js';

// Create a new post
router.post('/add', async (req, res) => {
  const { title, content, category } = req.body;
  const newPost = new Post({ title, content, category });
  
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json('Post not found');
    res.json(post);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

export default router;