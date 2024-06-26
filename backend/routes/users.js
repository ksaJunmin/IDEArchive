import bodyParser from 'body-parser';
import express from 'express';
const router = express.Router();
import User from '../db/user.js';
import jwt from 'jsonwebtoken';
import { authenticateToken } from './auth.js';
import bcrypt from 'bcryptjs'
const secretKey = 'cirjpscrmiw30lsciojm4po5i4';

router.use(bodyParser.urlencoded({extended:false}));

router.post('/signin', async function (req, res) {
  console.log('Request received: ', req.body);

  // 새로운 사용자 인스턴스를 생성
  const user = new User({
    name: req.body.name,
    schoolID: req.body.schoolID,
    email: req.body.email,
    password: req.body.password
  });

  try {
    // 유효성 검사를 수행하고 데이터베이스에 저장
    await user.save();
    res.status(201).send('사용자가 성공적으로 등록되었습니다.');
  } catch (error) {
    console.error('Error occurred: ', error);
    if (error.name === 'ValidationError') {
      res.status(400).send(error.message); // 유효성 검사 실패 메시지 전송
    } else {
      res.status(500).send('서버 오류: ' + error.message); // 기타 서버 오류 메시지 전송
    }
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // 사용자 검색
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    
    // 비밀번호 비교
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(402).json({ error: 'Invalid email or password' });
    }

    // JWT 생성
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.get('/info', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.sendStatus(404); // 사용자가 없으면 404 Not Found 반환
    }
    res.json({ id: user._id, name: user.name, schoolID: user.schoolID, email: user.email, points: user.points, numReq: user.numReq, numHowto: user.numHowto });
  
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.patch('/points', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.sendStatus(404); // 사용자가 없으면 404 Not Found 반환
    }

    user.points += req.body.point;
    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json('Error: ' + err);
  }
});

export default router;