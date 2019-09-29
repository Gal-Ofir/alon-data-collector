const routes = require('express').Router();
const get = require('./get');
const post = require('./post');

routes.use('/', get);
routes.use('/', post);

module.exports = routes;