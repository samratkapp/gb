import axios from 'axios'
import { GOOGLE_BOOK_API_KEY } from '../../config/constant'
import { logger } from '../../lib/logger'

export const getBooks = (params = {}) => { 
  logger.info(`getBooks ${JSON.stringify({ 
    key: GOOGLE_BOOK_API_KEY,
    // q:'thanos',
    startIndex:1,
    maxResults:10,
    ...params
  })}`)
  return new Promise((resolve,reject) => {
    axios.get('https://www.googleapis.com/books/v1/volumes', {
      params:{ 
        key: GOOGLE_BOOK_API_KEY,
        startIndex:1,
        maxResults:10,
        ...params
      }
    },).then((response) => {
      resolve(response.data)
    }).catch((err) => {
      logger.error('getBooks')
      reject(err)
    })
  })
}