const router = require('express').Router();
const Canvacord = require('canvacord');

router.get('/', (req, res) => {
	if(!req.query.avatar) {
		return res.status(400).json({
			status: 400,
			message: 'Missing avatar parameter',
			example: `${req.protocol}://${req.get('host')}/api/v1/canvas/beautiful?avatar=AVATAR_URL`
		});
	};
	Canvacord.Canvas.beautiful(req.query.avatar)
	.then(data => {
		var result = Buffer.from(data, 'beautiful.jpeg') // Use jpeg mime type for faster response
		res.setHeader('Content-Type', 'image/jpeg')
		res.end(result)
	})
	.catch(err => console.log(err.stack))
})

module.exports = router;