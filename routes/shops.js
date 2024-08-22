var express = require('express');
const Shop = require('../models/Shop');
var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const result = await Shop.find();
  res.send(result);
});

router.post('/', async function (req, res, next) {
  const result = await Shop.create({
    name: 'teclado importados',
    cnpj: '46.121.453/0001-77',
    endereco: 'Rua do Xenônio, 56',
    filial: 0,
  });
  res.status(200).send(result);
});

module.exports = router;
