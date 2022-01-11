const notFoundHandler = (req, res, next) => {
	res.status(404).send('The page you requested does not exist.')
	next();
};

const errorHandler = (error, req, res, next) => {
	if (!error.statusCode) error.statusCode = 500; // If status code was not given, give 500
	res.status(error.statusCode).json({
		status: error.statusCode,
    	message: error.toString(),
    	data: [],
  	});
	next();
};

module.exports = {
	notFoundHandler,
	errorHandler
}