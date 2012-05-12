exports.apply = (app) ->
	self = this

	acl = $.component 'acl'

	app.get '/', [
		$.beforeAction,
		$.controller('site').index
	]

	#rest interface

	app.get '/post',[
		$.beforeAction,
		$.controller('post').list
	]

	app.get '/post/:id',[
		$.beforeAction,
		$.controller('post').get
	]