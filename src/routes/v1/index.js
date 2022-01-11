const router = require('express').Router();

router.get('/', (req, res) => {
	res.status(200).json({
		message: 'Welcome to api routes',
		status: req.statusCode,
		path: req.path
	});
});

router.use('/info', require('./info/index'));
router.use('/canvas', require('./canvas/index'))

module.exports = router;