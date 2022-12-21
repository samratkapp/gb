import response from '../../config/response'
import { logger } from '../../lib/logger'
import { getBooks } from './books.service'

class BooksController {
  getBooks = async (req, res, next) => {
    try {
      logger.info('BooksController:getBooks')
      const books = await getBooks(req.query)
      response.success(res,'Records Found!',books)
    } catch (error) {
      logger.error('BooksController:getBooks')   
      next(error)
    }
  }
  saveBooks = (req, res, next) => {
    logger.info('BooksController:saveBooks')
    response.success(res,'Records Saved!')
  }
  updateBooks = (req, res, next) => {
    logger.info('BooksController:updateBooks')
    response.success(res,'Records updated!')
  }
}

export default new BooksController()
