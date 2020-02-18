const Dev = require('../models/dev.js');

const axios = require('axios');

module.exports = {
	async index(req, res){
		const devs = await Dev.find();

		return res.json(devs);
	},

	async store(req, res){
		//console.log(req.body);

		const {github_username, techs, goal} = req.body;

		var dev = await Dev.findOne({github_username});

		if(!dev){
			const resApi = await axios.get(`https://api.github.com/users/${github_username}`);

			const {name = login, bio, avatar_url, location} = resApi.data;

			const techs_array = techs.split(",").map(tech => tech.trim());

			//console.log(name, bio, avatar_url, location);

			 dev = await Dev.create({
				name,
				github_username,
				avatar_url,
				bio,
				goal,
				techs: techs_array,
				location
			})
		}

		return res.json(dev);
	}
}
