const express = require('express');
const path = require('path');

const server = express();
const router = express.Router();

server.use(express.static('public'));
server.use('/', router);

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

server.listen(3000);