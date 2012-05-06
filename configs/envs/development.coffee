express = require 'express'
#MongoStore = require 'connect-mongodb'
#Db = require('mongodb').Db
#Server = require('mongodb').Server
log4js = require 'log4js'
#mongoose = require 'mongoose'

exports.apply = (app)->
	app.configure 'production', ->
	app.use express.errorHandler {
		dumpExceptions: true,
		showStack: true
	}

	app.use express.session {
	secret: "soundFree_secred_Wdi78",
	#	store: new MongoStore({
	#	db: new Db('soundFree_session',
	#		new Server('localhost', 27017, {
	#		auto_reconnect: true,
	#		native_parser: true
	#		})
	#		, {})
	#	})
	}

	mongoose.connect('mongodb://localhost/soundFree', (err)->
		if err
			log4js.getLogger().error 'Can not connect to database'
			throw err;

		log4js.getLogger().info 'Successfully connected to database'
	)

	app.set 'port', 8000
	app.set 'view cache', false