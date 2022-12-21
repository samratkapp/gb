
import express from 'express'
const router = express.Router()

import booksRouter from '../component/books/index'
import response from '../config/response'
/* GET  page. */
router.get('/', function(req, res, next) {
  res.send({ statusCode:200, title: 'Express11' })
})
router.use('/books', booksRouter)
router.use('/*', (req,res) => {
  response.notFound(res,'Not Found!')
})

export default router
