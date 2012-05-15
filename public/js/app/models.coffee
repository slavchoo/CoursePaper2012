class Post extends Backbone.Model
	urlRoot : '/post/'
	url: ->
		@urlRoot + @get('_id')

window.Post = Post

class PostCollection extends Backbone.Collection
	model: Post
	url: '/post'

window.PostCollection = PostCollection

class User extends Backbone.Model
	urlRoot : '/user'

window.User = User

class UserColection extends Backbone.Collection
	model: User
	url: '/user'

window.UserColection = UserColection

class Track extends Backbone.Model
	urlRoot: '/track'

window.Track = Track

class TrackCollection extends Backbone.Collection
	model: Track
	url: '/track'

window.TrackCollection = TrackCollection

class Album extends Backbone.Model
	urlRoot: '/album'

window.Album  = Album

class AlbumCollection extends Backbone.Collection
	model: Album
	url: '/album'

window.AlbumCollection = AlbumCollection