class Post extends Backbone.Model
	urlRoot : '/post'

#post = new Post({id: 2})
#post.fetch()


class News extends Backbone.Collection
	model: Post
	url: '/post'

#news = new News()
#news.fetch()