const app = require('./app');
const config = require('./config/settings');

app.listen(config.port, () => {
	console.log('Test Server Listening On ')
});