const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    authorName: String,
    tags: [String],
    price: {
        indianPrice: String,
        europeanPrice: String
    },
    year: { type: Number, default: 2021 },
    totalPages: Number,
    stockAvailable: Boolean

}, { timestamps: true });

module.exports = mongoose.model('Bk', booksSchema) //users