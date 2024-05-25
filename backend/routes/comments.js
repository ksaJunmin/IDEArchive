import { Router } from 'express';
const router = Router();
import Comment from '../db/comment.js';
import Post from '../db/post.js';
import { authenticateToken } from './auth.js';

// 댓글 추가
router.post('/:postId', authenticateToken, async (req, res) => {
  const { content } = req.body;
  const postId = req.params.postId;
  const author = req.user.userId;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const newComment = new Comment({ content, author, post: postId });
    const savedComment = await newComment.save();
    res.json(savedComment);
  } catch (err) {
    res.status(400).json({ message: 'Error: ' + err.message });
  }
});

// 답글 추가
router.post('/:commentId/reply', authenticateToken, async (req, res) => {
  const { content } = req.body;
  const commentId = req.params.commentId;
  const author = req.user.userId;

  try {
    const parentComment = await Comment.findById(commentId);
    if (!parentComment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    const newReply = new Comment({ content, author, post: parentComment.post });
    const savedReply = await newReply.save();

    parentComment.replies.push(savedReply._id);
    await parentComment.save();

    res.json(savedReply);
  } catch (err) {
    res.status(400).json({ message: 'Error: ' + err.message });
  }
});

// 댓글 조회
router.get('/:postId', async (req, res) => {
  const postId = req.params.postId;

  try {
    const comments = await Comment.find({ post: postId })
      .populate('author')
      .populate({
        path: 'replies',
        populate: { path: 'author', select: 'name' }
      });
    res.json(comments);
  } catch (err) {
    res.status(400).json({ message: 'Error: ' + err.message });
  }
});

export default router;
