import axios from 'axios'
import { BASE_API_URL } from '../config/constant/constant'

export const getBooks = (params = {
  // filter: 'full',
}) => {
  return new Promise((resolve, reject) => {
    if (!params.q) {
      params = {
        ...params,
        q: 'Robotics',
      }
    }
    
    params = {
      ...params,
      maxResults:16
    }
     
    axios.get(`${BASE_API_URL}/books`, {
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