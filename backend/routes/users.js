import bodyParser from 'body-parser';
import express from 'express';
const router = express.Router();
import User from '../db/user.js';

router.use(bodyParser.urlencoded({extended:false}));


router.post('/', function(req,res){
  console.log('served '+req.body.id+'  '+req.body.password);
  User.create({
    id:req.body.id,
    data:req.body.password
  })
})
export default router;