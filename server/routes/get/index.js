const routes = require('express').Router();
const handlers = require('./handlers');

routes.get('/all', handlers.getAll);
routes.get('/random/:count', handlers.getRandomCandidates);
routes.get('/chart', handlers.getChartHeaders);

module.exports = routes;