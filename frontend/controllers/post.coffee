class PostController
	list: (req, res) ->
		posts = [
			{
				_id: 1
				title: "Post Title"
				conent: "Post Content",
			},
			{
				_id: 2
				title: "Post 2 Title"
				content: "Post 2 Content"
			}
		]
		res.send posts

	get: (req, res) ->
		res.send
			_id: req.param 'id'
			title: "Post Title"
			content: "Post content"

module.exports = new PostController()