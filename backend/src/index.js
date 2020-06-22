const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const {setupWebsocket} = require('./websocket')
const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://github:github@cluster0-kiaqu.mongodb.net/github?retryWrites=true&w=majority',
{
    useNewUrlParser : true,
    useUnifiedTopology : true,
});
app.use(cors());
//app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json());
app.use(routes);

server.listen(3333);