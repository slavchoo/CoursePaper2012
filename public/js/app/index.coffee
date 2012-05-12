class Controller extends Backbone.Router
	routes:
		"" : "start"
		"!/": "srart"
		"!/amin": "admin"

	start: ->
		console.log "start"

	admin: ->
		console.log "admin"

controller = new Controller()
Backbone.history.start()
