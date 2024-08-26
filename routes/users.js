var express = require('express');
const User = require('../models/User');
var router = express.Router();

router.get('/', async function(req, res, next) {
  const result = await User.find();
  res.send(result);
});

router.post('/', async function (req, res, next) {
  try {
    const result = await User.create({
      nome: req.body.nome,
      email: req.body.email,
      numero: req.body.numero,
      senha: req.body.senha,
    });
    res.status(200).send(result);
  } catch (err) { 
    next(err);
  }
});

router.get('/:id', async function (req, res, next) {
  const { id } = req.params;
  const result = await User.findOne({ _id: id });
  res.send(result);
});

router.patch('/:id', async function (req, res, next) {
  try {
    const { id } = req.params;
    const result = await User.findOneAndUpdate({ _id: id }, {
      nome: req.body.nome,
      email: req.body.email,
      numero: req.body.numero,
      senha: req.body.senha,
    });
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async function (req, res, next) {
  const { id } = req.params;
  const result = await User.findOne({ _id: id });
  res.send(result);
});


module.exports = router;
