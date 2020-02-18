const Dev = require('../models/dev.js');

module.exports = {
	async index(req, res){
		const {name, techs} = req.query;

		const techs_array = techs.split(",").map(tech => tech.trim());

		const devs = await Dev.find({
			name:{
				$eq: name
			},
			techs:{
				$in: techs_array
			}}
		)

		return res.json({devs})
	}
}
