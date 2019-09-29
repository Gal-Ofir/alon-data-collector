const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const routes = require('./routes');
const db = require('./db');
const root_path = require('app-root-path').path;
require('dotenv').config();

db.getConnection()
    .then(() => {

        app.use(express.static(path.join(root_path, 'build')));

        app.use(bodyParser.json());

        app.get('/', function (req, res) {
            res.sendFile(path.join(root_path, 'build', 'index.html'));
        });

        app.use('/api/', routes);

        app.listen(process.env.PORT || 8080);
        console.log('server started on port', process.env.PORT || 8080);
    });

