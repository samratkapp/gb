import { logger } from '../../lib/logger'
import Joi from 'joi'
import response from '../../config/response'

class BooksValidator {
  validateGetBooks = async (req,res,next) => {
    try {
      logger.info(`BooksValidator:validateGetBooks ${JSON.stringify(req.query)}`)
      const schema = Joi.object({
        q: Joi.string().required(),
        filter:Joi.string(),
        projection:Joi.string(),
        startIndex:Joi.string(),
        maxResults:Joi.string()
      })

      const {error} =  schema.validate(req.query)
      if (error) {
        response.badRequest(res,'Invalid Request',error.details)
      } else {
        next()
      }
    } catch (error) {
      logger.error('BooksValidator:validateGetBooks')
      next(error)
    }
  }
}

export default new BooksValidator()
