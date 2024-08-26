var express = require('express');
const Shop = require('../models/Shop');
var router = express.Router();

router.get('/', async function (req, res, next) {
  const result = await Shop.find();
  res.send(result);
});

router.post('/', async function (req, res, next) {
  try {
    const result = await Shop.create({
      nome: req.body.nome,
      cnpj: req.body.cnpj,
      endereco: req.body.endereco,
      filial: req.body.filial,
    });
    res.status(200).send(result);
  } catch (err) { 
    next(err);
  }
});

router.get('/:id', async function (req, res, next) {
  const { id } = req.params;
  const result = await Shop.findOne({ _id: id });
  res.send(result);
});

router.patch('/:id', async function (req, res, next) {
  try {
    const { id } = req.params;
    const result = await Shop.findOneAndUpdate({ _id: id }, {
      nome: req.body.nome,
      cnpj: req.body.cnpj,
      endereco: req.body.endereco,
      filial: req.body.filial,
    });
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async function (req, res, next) {
  const { id } = req.params;
  const result = await Shop.findOne({ _id: id });
  res.send(result);
});


module.exports = router;
