# Express  Template Boillerplate RestfullApi
[![made-with-nodejs](https://img.shields.io/badge/Made%20with-Nodejs-1f425f.svg)](https://nodejs.org)
[![made-with-expressjs](https://img.shields.io/badge/Made%20with-Expressjs-1f425f.svg)](https://expressjs.com/)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/firmanJS)
[![GitHub license](https://img.shields.io/github/license/KASKUSTTV/express-api-template.svg)](https://github.com/KASKUS/express-api-template/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/KASKUSTTV/express-api-template.svg)](https://github.com/KASKUS/express-api-template/issues/)

[![GitHub pull-requests](https://img.shields.io/github/forks/KASKUSTTV/express-api-template.svg)](https://github.com/KASKUS/express-api-template/pulls/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square.svg)](http://makeapullrequest.com)

## How To use
Clone this repository via https:
```bash
https://github.com/KASKUS/express-api-template.git
```

## Core Stack
- **Node.js** - [http://nodejs.org/](http://nodejs.org/)
- **Express** - [http://expressjs.com/](http://expressjs.com/)
- **nodemon** - [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)

# Feature
1. Error Handling
2. Custom message api response

## How To run


### Run manualy

* via yarn or npm :

```sh
# install package
npm install or yarn add

#  running app
npm run start or yarn run start

# running server tetsing
npm run dev or yarn run dev
```

## Project Structure
```
├── src/                  	* all source code in here
	└── config/           	* all configuration file here
	|  └── db.js          	* configuration database
	└── database/         	* all models schema file here
	└── core/         	  	* all file handlers here
	└── routes/           	* all file route here
	|   └── index.js        * register all route
	|   └── admin/        	* register all admin route
	|   └── api/      	  	* register all api route
	|      └── info/     	* register all info route
	└── utils/            	* all utils file here
```