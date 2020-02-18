const { Router } = require('express');

const devController = require('./controller/dev_controller.js'); 
const searchController = require('./controller/searchController.js');

const router = Router();

router.post('/devs', devController.store);
router.get('/devs', devController.index);

router.get('/search', searchController.index);

module.exports = router;