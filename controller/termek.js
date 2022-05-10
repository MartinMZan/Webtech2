const Product = require('../models/termek');

exports.termek_create = function (req, res, next) {
    Product.findOne({ name: req.body.name }, function (err, p) {
        if (err) return err;
        return p
    }).exec(function (err, existingProduct) {
        if (existingProduct && existingProduct.name === req.body.name) {
            return next(err)
        } else {
            let product = new Product(
                {
                    name: req.body.name,
                    description: req.body.description,
                    date: req.body.date,
                    price: req.body.price,
                    amount: req.body.amount,
                }
            );
            product.save(function (err, object) {
                if (err) {
                    return next(err);
                }
                res.json({ id: object.id })
            })
        }
    })

};

exports.termek_get_all = function (req, res, next) {
    Product.find({}, function (err, product) {
        if (err) return next(err);
        res.json(product);
    })
};

exports.termek_details = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.json(product);
    })
};


exports.termek_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, product) {
        if (err) return next(err);
        res.json('Product udpated.');
    });
};

exports.termek_delete = function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.json('Deleted successfully!');
    })
};