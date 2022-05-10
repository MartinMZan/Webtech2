const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TermekSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    price: { type: Number, required: true, max: 1000000 },
    amount: { type: Number, required: true, max: 1000000 },
});

module.exports = mongoose.model('termek', TermekSchema);