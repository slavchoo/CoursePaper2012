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

	app.get '/album',[
		$.beforeAction,
		$.controller('album').list
	]

	app.get '/album/:id', [
		$.beforeAction,
		$.controller('album').get
	]


	app.all '/debug/fix', [
		$.beforeAction,
		$.controller('debug').index
	]