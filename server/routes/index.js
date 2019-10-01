const routes = require('express').Router();
const get = require('./get');
const post = require('./post');
const auth = require('./auth');

routes.use('/', auth);
routes.use('/', get);
routes.use('/', post);

module.exports = routes;