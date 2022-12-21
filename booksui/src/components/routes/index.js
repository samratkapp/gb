/* eslint-disable no-unused-vars */
import {
  useRoutes
} from 'react-router-dom'
import { booksRoutes } from '../books'
 
export default function Navigation() {
    
  const element = useRoutes([
    ...booksRoutes
  ])

  return element
}