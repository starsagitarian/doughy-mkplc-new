const { Schema, model } = require('../database/db');

const reviewSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    bakery: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    score: {
        type: Number,
        default: 3
    }
});

module.exports = model('Reviews', reviewSchema);
