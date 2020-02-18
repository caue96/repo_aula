const Dev = require('../models/Dev')

module.exports = {
  // Filtro por tecnologia
  async index(req, res) {
    const { techs, name } = req.query;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
    });

    console.log(techs, name);
    return res.json({devs})
  }
}