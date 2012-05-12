$ ->
	class Controller extends Backbone.Router
		routes:
			"" : "index"
			"!/": "index"
			"!/news": "news"
			"!/music": "music"
			"!/video": "video"
			"!/artists": "artists"

		index: ->
			Views.page.render() if Views.page?

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

	class SitePage extends Backbone.View
		el: $ "#mainContainer"

		posts: []
		albums: []

		events: {}

		constructor: ->
			@posts = new PostCollection()
			@posts.bind 'add', @addPost, @
			@posts.bind 'all', @addAllPosts, @
			@posts.fetch()

			@albums = new AlbumCollection()
			@albums.bind 'add', @addAlbum, @
			@albums.bind 'all', @addAllAlbums, @
			@albums.fetch()

		render: ->
			console.log "sdsd"
			$(@el).append(_.template $('#NewsContainer').html()) if !$(@el).find('#NewsContainer').length
			$(@el).append(_.template $('#AlbumContainer').html()) if !$(@el).find('#AlbumContainer').length

		addPost: (post)->
			view = new PostView
				model: post

			container = $(@el).find('.news')
			container.append view.render().el

		addAllPosts: ->
			@posts.each @addPost, @

		addAlbum: (album)->
			view = new AlbumView
				model: album

			container = $(@el).find('.albums')
			container.append view.render().el

		addAllAlbums: ->
			@albums.each @addAlbum, @


	class PostView extends Backbone.View
		tagName: "div"
		className: "span4 blog"
		template: _.template $("#PostView").html()

		render: ->
			@$el.html @template()
			return @

	class AlbumView extends Backbone.View
		tagName: 'div'
		className: 'span4 blog'
		template: _.template $("#AlbumView").html()

		render: ->
			@$el.html @template()
			return @

	Views =
		page: new SitePage()

	controller = new Controller()
	Backbone.history.start()

