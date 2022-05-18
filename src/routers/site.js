const express = require('express');
const newsRouter = express.Router();

const sitesController = require('../app/controllers/SitesControllers');

newsRouter.get('/search', sitesController.search);
newsRouter.get('/', sitesController.index);


module.exports = newsRouter;