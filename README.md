# Express  Template Boillerplate RestfullApi

## How To use
Clone this repository via https:
```bash
https://github.com/firmanJS/express-template.git
```

## Core Stack
- **Node.js** - [http://nodejs.org/](http://nodejs.org/)
- **Express** - [http://expressjs.com/](http://expressjs.com/)
- **nodemon** - [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)

# Feature
1. Error Handling
2. Custom message api response

## How To run

### copy environment variable

```sh
cp .env-sample .env
```

### run manualy

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