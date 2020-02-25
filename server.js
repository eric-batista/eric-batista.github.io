const express = require('express');

const server = express();
const router = express.Router();

server.use(express.static('public'));
server.use('/', router);

server.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000);