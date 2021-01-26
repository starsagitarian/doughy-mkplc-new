const router = require('express').Router();
const controller = require('../controller/index');

router.get('/reviews', controller.getAll);
router.post('/reviews', controller.postOne);

router.put('/reviews/:id', controller.updateOne);
router.delete('/reviews/:id', controller.deleteOne);
module.exports = router;