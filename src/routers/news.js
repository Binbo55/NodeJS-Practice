const express = require('express');
const newsRouter = express.Router();

const newsController = require('../app/controllers/NewsControllers');

newsRouter.get('/:slug', newsController.show);
newsRouter.get('/', newsController.index);


module.exports = newsRouter;