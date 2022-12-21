import express from 'express'
const router = express.Router();
import booksController from './books.controller'
import validate from './books.validation'

/* GET Books listing. */
router
  .get('/', validate.validateGetBooks, booksController.getBooks)
  .post('/', booksController.saveBooks)
  .patch('/:id', booksController.updateBooks);

export default router
