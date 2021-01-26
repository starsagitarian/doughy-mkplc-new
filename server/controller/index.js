const { replaceOne } = require('../model/index');
const Reviews = require('../model/index');

exports.getAll = async (req, res) => {
    try {
        const review = await Reviews.find();
        res.status(200);
        res.send(review);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};
// working well

exports.postOne = async (req, res) => {
    try {
        const { name, bakery, review, date, score } = req.body;
        const newReview = await Reviews.create({ name, bakery, review, date, score });
        res.status(201);
        res.send(newReview);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};
// working well

exports.updateOne = async (req, res) => {
    try {
        const id = req.params.id;
        const update = req.body.review;
        const uOne = await Reviews.findByIdAndUpdate({ _id: id }, {review: update}, {new: true});
        console.log(uOne);
        res.send(uOne);
        res.status(201);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}
// not working

exports.deleteOne = async (req, res) => {
    try {
        const id = req.params.id;
        const dOne = await Reviews.findOneAndDelete({ _id: id });
        res.send(dOne);
        res.status(201);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}
// not working