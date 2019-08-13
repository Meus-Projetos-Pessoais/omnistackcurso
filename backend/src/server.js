const express = require('express');
const server = express();
const routes = require('./routes');
const mongoose =  require('mongoose')

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-d1p9k.mongodb.net/omnistack?retryWrites=true&w=majority', {useNewUrlParser: true});
server.use(express.json());
server.use(routes);

server.listen(3333);