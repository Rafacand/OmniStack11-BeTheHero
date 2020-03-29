const express = require('express');
const routes = express.Router();
const OngController = require('./controlllers/ongController');
const incidentController = require('./controlllers/incidentController');
const ProfileController = require('./controlllers/ProfileController');
const SessionController = require('./controlllers/SessionController');

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.get('/incidents',incidentController.index);
routes.post('/incidents',incidentController.create);
routes.delete('/incidents/:id',incidentController.delete);

routes.get('/profile',ProfileController.index);
routes.post('/sessions',SessionController.create);
module.exports = routes;