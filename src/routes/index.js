const router = require('express').Router();

router.get('/', (req, res) => {
	res.status(200).send('Hello world from, home page')
});

// Api routes
router.use('/api/v1', require('./v1/index'));

module.exports = router;