const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const getRoutes = require('./routes/get');
const db = require('./db');
const root_path = require('app-root-path').path;
require('dotenv').config();

db.getConnection()
    .then(() => {

        app.use(express.static(path.join(root_path, 'build')));

        app.use(bodyParser());

        app.get('/ping', function (req, res) {
            return res.send('pong');
        });

        app.get('/', function (req, res) {
            res.sendFile(path.join(root_path, 'build', 'index.html'));
        });

        app.use('/api/', getRoutes);

        app.listen(process.env.PORT || 8080);
    });

