const { Router } = require('express');

const devcontroller = require('../controllers/DevController');
const SearchController = require('../controllers/SearchController');
const routes  = Router();

routes.post('/devs', devcontroller.store);
routes.get('/dev', devcontroller.index);
routes.get('/search',SearchController.index);

module.exports =routes;