const router = require('express').Router();

router.get('/', (req, res) => {
	res.status(200).send('Welcome to admon routes');
});

router.use('/users', require('./users'));

module.exports = router;