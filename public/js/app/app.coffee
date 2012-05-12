$ ->
	class Controller extends Backbone.Router
		routes:
			"" : "inde"
			"!/": "index"
			"!/news": "news"
			"!/music": "music"
			"!/video": "video"
			"!/artists": "artists"

		index: ->
			Views.index.render() if Views.index?

		news: ->
			console.log "news"

		music: ->
			console.log "music"

		video: ->
			console.log "videos"

		artists: ->
			console.log "artists"


	AppState =
		username : ""


	Views = {}

	class SiteIndex extends Backbone.View
		el: $ "#mainContainer"

		template: _.template ($ "#SiteIndex").html()

		events: {}

		render: ->
			$(@el).html @template AppState


	Views =
		index: new SiteIndex()


	controller = new Controller()
	Backbone.history.start()

