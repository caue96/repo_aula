const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
	name: String,
	bio: String,
	github_username: String,
	avatar_url: String,
	goal: String,
	techs: [String],
	location: String
})

module.exports = mongoose.model('Dev', DevSchema);
