mongoose = require 'mongoose'
Schema = mongoose.Schema
Query = mongoose.Query
ObjectId = Schema.ObjectId

PostSchema = new Schema
	title:
		type: String
		require: true
	content:
		type: String
		require: true
	img: String
	user:
		type: Schema.ObjectId
		ref: 'User'
	createdAt:
		type: Date
		default: Date.now


Post = mongoose.model 'Post', PostSchema
global.Post = Post


