const routes = require('express').Router();
const handlers = require('./handlers');

routes.post('/save', handlers.saveCandidates);

module.exports = routes;