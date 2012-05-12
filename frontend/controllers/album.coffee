class AlbumController
	list: (req, res) ->
		posts = [
			{
			_id: 1
			title: "Album Title"
			conent: "Album Content",
			},
			{
			_id: 2
			title: "Album 2 Title"
			content: "Album 2 Content"
			}
		]
		res.send posts

	get: (req, res) ->
		res.send
			_id: req.param 'id'
			title: "Album Title"
			content: "Album content"

module.exports = new AlbumController()