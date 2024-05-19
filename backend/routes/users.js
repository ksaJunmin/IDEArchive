import bodyParser from 'body-parser';
import express from 'express';
const router = express.Router();
import User from '../db/user.js';

router.use(bodyParser.urlencoded({extended:false}));


router.post('/', function(req,res){
  console.log('served '+req.body.name+' '+req.body.schoolID+' '+req.body.email+' '+req.body.password);
  User.create({
    id:req.body.id,
    data:req.body.password,
    name:req.body.name,
    schoolID:req.body.schoolID,
    email:req.body.email,
    password:req.body.password
  })
})
router.get('/', function(req,res,next){
  res.send('asdf');
})
export default router;