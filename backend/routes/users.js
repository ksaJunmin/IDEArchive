import bodyParser from 'body-parser';
import express from 'express';
const router = express.Router();
import User from '../db/user.js';

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


/*
router.post('/', function(req,res){
  console.log('served '+req.body.id+'  '+req.body.password);
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
*/

router.post('/user', async (req, res) => {
  try {
    const { name, schoolID, email, password } = req.body;
    console.log('served', name, schoolID, email, password);
    const newUser = new User({
      name,
      schoolID,
      email,
      password
    });
    await newUser.save();
    res.status(201).send('User created');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Internal Server Error');
  }
});
export default router;
