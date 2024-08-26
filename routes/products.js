var express = require('express');
const Product = require('../models/Product');
var router = express.Router();

router.get('/', async function (req, res, next) {
    const result = await Product.find();
    res.send(result);
});

router.post('/', async function (req, res, next) {
    try {
        const result = await Product.create({
            nome: req.body.nome,
            qr_code: req.body.qr_code,
            preco: req.body.preco,
            codigo_barras: req.body.codigo_barras,
            loja_id: req.body.loja_id,
        });
        res.status(200).send(result);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async function (req, res, next) {
    const { id } = req.params;
    const result = await Product.findOne({ _id: id });
    res.send(result);
});

router.patch('/:id', async function (req, res, next) {
    try {
        const { id } = req.params;
        const result = await Product.findOneAndUpdate({ _id: id }, {
            nome: req.body.nome,
            qr_code: req.body.qr_code,
            preco: req.body.preco,
            codigo_barras: req.body.codigo_barras,
            loja_id: req.body.loja_id,
        });
        res.status(200).send(result);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async function (req, res, next) {
    const { id } = req.params;
    const result = await Product.findOne({ _id: id });
    res.send(result);
});


module.exports = router;
