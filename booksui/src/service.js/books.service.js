import axios from 'axios'

export const getBooks = (params = {
  // filter: 'full',
}) => {
  return new Promise((resolve, reject) => {
    if (!params.q) {
      params = {
        ...params,
        q: 'Jon Winokur',
      }
    }
    if (!params.startIndex) {
      params = {
        ...params
      }
    }
    params = {
      ...params,
      maxResults:21
    }
     
    axios.get('http://localhost:3005/books', {
      params 
    })
      .then(function (response) {
        resolve({items:response.data.data.items,totalItems:response.data.data.totalItems})
      })
      .catch(function (error) {
        reject(error)
      })
  })
}