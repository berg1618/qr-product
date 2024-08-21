var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const mongoose = require('mongoose');

const port = 3001;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://berg-b:${process.env.DB_PASSWORD}@cluster0.j3xh1vt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
}

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;
