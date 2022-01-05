const router = require('express').Router();

router.get('/', (req, res) => {
	res.status(200).json({
		message: 'Hello World',
		status: req.statusCode,
	});
});

router.use('/api', require('./api/index'));
router.use('/admin', require('./admin/index'));

module.exports = router;