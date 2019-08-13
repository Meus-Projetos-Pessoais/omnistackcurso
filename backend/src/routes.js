const express =  require('express')

const routes =  express.Router();

const DevController = require('./controllers/DevController')

routes.get('/', function(req, res) {
    return res.send('Hello ${req.query.name}');
});

routes.post('/devs', function (req, res) {
    //console.log(req.body);

    return res.json({ok: true});
});

module.exports =  routes;
