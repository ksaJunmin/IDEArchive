import { Router } from 'express';
const router = Router();
import Request from '../db/request.js';
import Answer from '../db/answer.js';
import { authenticateToken } from './auth.js';

// 의뢰 목록 가져오기
router.get('/', async (req, res) => {
    try {
      const requests = await Request.find();
      res.json(requests);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 의뢰 게시물 작성
router.post('/', authenticateToken, async (req, res) => {
    const request = new Request({
        title: req.body.title,
        description: req.body.description,
        author: req.user.userId,
        points: req.body.points
    });

    try {
        const newRequest = await request.save();
        res.status(201).json(newRequest);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 답변 추가
router.post('/:requestId/answers', authenticateToken, async (req, res) => {
    const answer = new Answer({
        content: req.body.content,
        author: req.user.userId,
    });

    try {
        const newAnswer = await answer.save();
        const request = await findById(req.params.requestId);
        request.answers.push(newAnswer);
        await request.save();
        res.status(201).json(newAnswer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 채택된 답변 업데이트
router.patch('/:requestId/choose-answer/:answerId', async (req, res) => {
    try {
        const request = await findById(req.params.requestId);
        if (request.chosenAnswer) {
            return res.status(400).json({ message: '이미 채택된 답변이 있습니다.' });
        }
        const answer = await Answer.findById(req.params.answerId);
        await answer.save();
        request.chosenAnswer = answer;
        await request.save();
        res.json(answer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
