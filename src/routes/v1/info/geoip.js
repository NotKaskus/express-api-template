const router = require('express').Router();
const ipInfo = require("ipinfo")

router.get('/', (req, res) => {
	if(!req.query.ip) {
		return res.status(400).json({
			status: 400,
			message: 'Missing avatar parameter',
			example: `${req.protocol}://${req.get('host')}/api/v1/info/geoip?ip=IP`
		});
	};
	ipInfo(req.query.ip)
	.then(cLoc => {
		if(cLoc !== null) {
			return res.status(400).json({
				status: 400,
				message: 'Please provide a valid IP address',
				example: `${req.protocol}://${req.get('host')}/api/v1/info/geoip?ip=IP`
			});
		};
		res.status(200).json(cLoc)
	})
	.catch(console.error)
})


module.exports = router;