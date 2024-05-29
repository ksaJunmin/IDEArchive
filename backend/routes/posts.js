import { Router } from 'express';
const router = Router();
import Post from '../db/post.js';
import { authenticateToken } from './auth.js';
import { mongoose } from 'mongoose';

import multer from 'multer';
import { GridFSBucket } from 'mongodb';
import { Readable } from 'stream';
const upload = multer({ storage: multer.memoryStorage() });

// Create a new post
router.post('/add', authenticateToken, upload.single('file'), async (req, res) => {
  const { title, content, category, islatex } = req.body;
  const author = req.user.userId;
  const {buffer, originalname} = req.file;
  const encodedOriginalName = encodeURIComponent(originalname);

  const bucket = new GridFSBucket(mongoose.connection.db, {
    bucketName: 'uploads'
  });

  const readableStream = new Readable();
  readableStream.push(buffer);
  readableStream.push(null);

  const uploadStream = bucket.openUploadStream(originalname);
  readableStream.pipe(uploadStream);

  
  uploadStream.on('error', (error) => {
    res.status(500).send(error);
  })

  uploadStream.on('finish', async () => {
    const newPost = new Post({
      title,
      content,
      category,
      author,
      islatex,
      fileId: uploadStream.id,
      originalname: encodedOriginalName
    });

    try {
      const savedPost = await newPost.save();
      res.json(savedPost);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
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
    if (!post) return res.status(404).json('Post not found');

    const bucket = new GridFSBucket(mongoose.connection.db, {
      bucketName: 'uploads'
    });

    if (post.fileId) {
      const downloadStream = bucket.openDownloadStream(post.fileId);
      let chunks = [];

      downloadStream.on('data', (chunk) => {
        chunks.push(chunk);
      });

      downloadStream.on('end', () => {
        const fileData = Buffer.concat(chunks);
        const base64File = fileData.toString('base64');
        res.json({ post, file: base64File, originalname: post.originalname });
      });

      downloadStream.on('error', (err) => {
        res.status(500).json('Error: ' + err);
      });
    } else {
      res.json({ post });
    }
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

router.patch('/:postId/like', authenticateToken, async (req, res) => {
  try {
    const userId = await req.user.userId;
    const post = await Post.findById(req.params.postId).populate('author');
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