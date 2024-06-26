import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  schoolID: {
    type: String,
    minlength: 6,
    maxlength: 6,
  },
  email: {
    type: String,
    trim: true, // 스페이스를 없애주는 역할
    unique: 1, // 중복을 허용하지 않는다
  },
  password: {
    type: String,
    minlength: 8,
    
  },
  role: {
    // 관리자와 일반 유저를 구분하기 위한 역할
    type: Number,
    default: 0, // 0은 일반 유저, 1은 관리자
  },
  
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
  points: {
    type: Number,
    default: 1000, 
  },
  numReq: {
    type: Number,
    default: 0
  },
  numHowto: {
    type: Number,
    default: 0
  }
});


const User = mongoose.model('User', userSchema); // 스키마를 모델로 감싸준다.

export default User; // 다른 곳에서도 사용할 수 있도록 export 해준다.