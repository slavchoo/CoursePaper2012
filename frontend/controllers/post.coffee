class PostController
	list: (req, res) ->
		Post.find {}, (err, posts) ->
			res.send posts

	get: (req, res) ->
		res.send
			_id: req.param 'id'
			title: "Post Title"
			content: "Post content"

module.exports = new PostController()