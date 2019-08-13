const express =  require('express')
const routes =  express.Router();
const DevController = require('./controllers/DevController')

routes.post('/devs', DevController);

module.exports =  routes;
