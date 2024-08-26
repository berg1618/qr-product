var express = require('express');
const Cart = require('../models/Cart');
var router = express.Router();

router.get('/', async function (req, res, next) {
    const result = await Cart.find();
    res.send(result);
});

router.post('/', async function (req, res, next) {
    try {
        const result = await Cart.create({
            produto_id: req.body.produto_id,
            usuario_id: req.body.usuario_id,
            comprado: req.body.comprado,
        });
        res.status(200).send(result);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async function (req, res, next) {
    const { id } = req.params;
    const result = await Cart.findOne({ _id: id });
    res.send(result);
});

router.patch('/:id', async function (req, res, next) {
    try {
        const { id } = req.params;
        const result = await Cart.findOneAndUpdate({ _id: id }, {
            produto_id: req.body.produto_id,
            usuario_id: req.body.usuario_id,
            comprado: req.body.comprado,
        });
        res.status(200).send(result);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async function (req, res, next) {
    const { id } = req.params;
    const result = await Cart.findOne({ _id: id });
    res.send(result);
});

module.exports = router;
