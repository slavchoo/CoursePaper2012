express = require 'express'
ejs = require 'ejs'
app = module.exports = express.createServer()


# load models


app.path =  path = require('path');
app.jsHandler  = jsHandler = "";
app.crypto = crypto = require('crypto');

app.configure ->
	publicDir = "#{__dirname}/public"
	viewsDir  = "#{__dirname}/views"
	coffeeDir = "#{viewsDir}/coffeescript"

	app.set "views", viewsDir
	app.register '.html', ejs
	app.set "view engine", 'html'
	app.use app.router
	app.use express.compiler(
		src: viewsDir,
		dest: publicDir,
		enable: ['coffeescript'])
	app.use express.static publicDir

	app.use(express.bodyParser({
		uploadDir: './files'
		}
	));
	app.use express.methodOverride();
	app.use express.cookieParser();


require('./configs/envs/production').apply(app);
require('./configs/envs/development').apply(app);

app.dynamicHelpers {
	session: (req, res)->
		return req.session
}

require('./configs/bootstrap').apply app
require('./frontend/configs/bootstrap').apply app
require('./admin/configs/bootstrap').apply app

app.get '*', (req, res)->
	throw new NotFound()

app.listen 3000
console.log "Express server listening on port %d in %s mode", app.address().port, app.settings.env