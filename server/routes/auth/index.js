const routes = require('express').Router();
const handlers = require('./handlers');

routes.get('/verify/:hash', handlers.verifyHash);
routes.post('/login/', handlers.login);

module.exports = routes;