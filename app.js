var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shopsRouter = require('./routes/shops');
var productsRouter = require('./routes/products');
var cartsRouter = require('./routes/carts');

const mongoose = require('mongoose');

const port = 3001;

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://berg-b:${process.env.DB_PASSWORD}@cluster0.j3xh1vt.mongodb.net/qr-product`);
}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shops', shopsRouter);
app.use('/products', productsRouter);
app.use('/carts', cartsRouter);

app.listen(port, () => {
  console.log(`Project is listening on port ${port}`)
})

module.exports = app;
