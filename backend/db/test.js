import express from 'express'; // express 임포트
const app = express(); // app생성
const port = 3000;

app.get('/', function (req, res) {
  res.send('hello world!!');
});

app.listen(port, () => console.log(`${port}포트입니다.`));

// 몽구스 연결
import { connect } from 'mongoose';
connect(
    'mongodb+srv://ksaJunmin:ww234700@ksajunmin.hiq5vra.mongodb.net/'
  )
  .then(() => console.log('MongoDB conected'))
  .catch((err) => {
    console.log("fuckyou");
  });