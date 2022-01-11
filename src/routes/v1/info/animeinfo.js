const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
	if(!req.query.anime) return res.status(400).json({
		"error": [
			{
				status: 400,
				message: 'Anime cannot be null',
				example: `https://${req.host}/api/animanga/animeinfo?anime=ANIME_NAME`
			}
		]
	});
	await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${req.query.anime}&page[limit]=1`)
	.then(res => res.json())
    .then(body => res.status(200).json(body))
	.catch(function(e) {
	console.error(e);
	return res.status(500).json({
		error: [
			{
				status: 500,
				message: 'Something bad happen the gives you 500 status code',
			}
		],
		success: false,
		time: 0
	});
  });
});

module.exports = router;