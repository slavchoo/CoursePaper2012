mongoose = require 'mongoose'
Schema = mongoose.Schema
Query = mongoose.Query
ObjectId = Schema.ObjectId
crypto = require 'crypto'

UserSchema = new Schema
	name:
		type: String
		required: true
	email:
		type: String
		required: true
		unique: true