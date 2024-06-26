import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import usersRouter from './routes/users.js';
import postsRouter from './routes/posts.js';
import commentsRouter from './routes/comments.js';
import requestsRouter from './routes/requests.js';
import notificationsRouter from './routes/notifications.js';

const app = express();


// view engine setup
app.set("views", path.join(path.resolve() + "/views"));
app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(path.resolve(), '/public')));

app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);
app.use('/requests', requestsRouter);
app.use('/notifications', notificationsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'public', 'index.html'));
});

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

// 몽구스 연결
import { connect } from 'mongoose';
connect(
    'mongodb+srv://ksajunmin:23089129@idearchive.0opvnvt.mongodb.net/db'
  )
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.log('Not connected!!!');
  });


export default app;
