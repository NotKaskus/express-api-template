const router = require('express').Router();

router.get('/', (req, res) => {
	res.status(200).send('Wecome to canvas routes')
})

router.use('/affect', require('./affect'))
router.use('/beautiful', require('./beautiful'))
router.use('/changemymind', require('./changemymind'))
router.use('/delete', require('./delete'))
router.use('/jail', require('./jail'))

module.exports = router;