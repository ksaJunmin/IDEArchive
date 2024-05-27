import { Router } from 'express';
const router = Router();
import Post from '../db/post.js';
import { authenticateToken } from './auth.js';
import cors from 'cors';
import multer from 'multer';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Create a new post
router.post('/add', authenticateToken, upload.single('file'), async (req, res) => {
  const { title, content, category, islatex } = req.body;
  const { filename, originalname } = req.file;
  const author = req.user.userId;
  const newPost = new Post({ title, content, category, author, islatex, filename, originalname });

  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('author');
    res.json(posts);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId).populate('author');
    const filePath = path.join(__dirname, '../uploads', post.filename);
    const readStream = fs.createReadStream(filePath);

    // 파일을 스트리밍하여 응답
    readStream.pipe(res);
    if (!post) return res.status(404).json('Post not found');
    res.json(post);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

router.patch('/:postId/like', authenticateToken, async (req, res) => {
  try {
    const userId = await req.user.userId;
    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json('Post not found');

    const userIdStr = userId.toString();

    if (post.likedBy.some(id => id.toString() === userIdStr)) {
      post.likedBy = post.likedBy.filter(id => id.toString() !== userIdStr);
      post.like -= 1;
    } else {
      post.likedBy.push(userId);
      post.like += 1;
    }

    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

export default router;