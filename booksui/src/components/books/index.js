import { BookDetail } from '../books/book-detail'
import { Books } from '../books/books'

export  const booksRoutes = [
  { path: '/', element: <Books /> },
  { path: 'book-detail/:id', element: <BookDetail /> }
]