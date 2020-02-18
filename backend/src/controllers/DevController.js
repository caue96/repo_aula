const axios = require('axios');
const Dev = require('../models/Dev');
 
 module.exports = {

  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },

  async store (req, res) {
    const {github_username, techs, goal } = req.body;

    let dev = await Dev.findOne({github_username});

    if (!dev) {                           
      const response = await axios.get(`https://api.github.com/users/${github_username}`);
      
      //continuar
      const { name = login, avatar_url, bio, location } = response.data;
      
      const techsArray = techs.split(',').map(tech => tech.trim());
    
      console.log(github_username, name, avatar_url, bio, location, techsArray);
    
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        location,
        techs: techsArray,
        goal,
      })
      
    } 
    return res.json(dev);  
  },

  async teste(req, res) {
    console.log(req.params);
    return res.json({ msg: 'ue'});
  }
}