<<<<<<< Updated upstream
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
router.get('/', function(req,res,next){
  res.send('asdf');
})
export default router;
=======
import Router from 'express';
import bodyParser from 'body-parser';
import User from './schema.js';
const router = Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




router.post('/', (req, res) => {
  console.log('served ' + req.body.id + ' ' + req.body.password);
  User.create({
    id: req.body.id,
    data: req.body.password
  })
  
});

export default router;
>>>>>>> Stashed changes
