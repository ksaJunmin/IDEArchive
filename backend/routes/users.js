import bodyParser from 'body-parser';
import express from 'express';
const router = express.Router();
import User from '../db/user.js';

router.use(bodyParser.urlencoded({extended:false}));


/*

router.post('/',function(req,res){
  console.log('served '+req.body.name+' '+req.body.schoolID+' '+req.body.email+' '+req.body.password);
  User.create({
    name:req.body.name,
    schoolID:req.body.schoolID,
    email:req.body.email,
    password:req.body.password
  });
  //console.log('plz');
});
*/
router.post('/', async function (req, res) {
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

router.get('/', function (req, res, next) {
  res.send('GET request to the users route');
});

export default router;