import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
<<<<<<< Updated upstream
 
=======
import mongoose from 'mongoose'
import indexRouter from './routes/index.js';
>>>>>>> Stashed changes
import usersRouter from './routes/users.js';

const app = express();


// view engine setup
app.set("views", path.join(path.resolve() + "/views"));
app.set("view engine", "jade");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.resolve(), '/public')));

app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

<<<<<<< Updated upstream
=======
// 몽구스 연결
>>>>>>> Stashed changes
import { connect } from 'mongoose';
connect(
    'mongodb+srv://ksaJunmin:ww234700@ksajunmin.hiq5vra.mongodb.net/'
  )
<<<<<<< Updated upstream
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.log("not connected");
  });

=======
  .then(() => console.log('MongoDB conected'))
  .catch((err) => {
    console.log("fuckyou");
  });


>>>>>>> Stashed changes
export default app;
