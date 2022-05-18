const express = require('express');
const newsRouter = express.Router();

const courseController = require('../app/controllers/CourseControllers');

newsRouter.get('/create', courseController.create); 
newsRouter.post('/store', courseController.store); 
newsRouter.get('/:id/edit', courseController.edit); 
newsRouter.post('/handle-form-actions', courseController.handleFormActions);
newsRouter.put('/:id', courseController.update); 
newsRouter.patch('/:id/restore', courseController.restore); 
newsRouter.delete('/:id', courseController.destroy); 
newsRouter.delete('/:id/force', courseController.forceDestroy); 
newsRouter.get('/:slug', courseController.show); 


module.exports = newsRouter;