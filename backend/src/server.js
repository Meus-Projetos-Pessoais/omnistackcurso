const express = require('express');
const server = express();
const routes = require('./routes');
const mongoose =  require('mongoose')
const cors =  require('cors')

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-ux890.mongodb.net/omnistack?retryWrites=true&w=majority', {useNewUrlParser: true});

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);