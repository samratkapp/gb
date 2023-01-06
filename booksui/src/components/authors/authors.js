import { useContext, useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap'
import { getBooks } from '../../service/books.service'
import { BooksContext } from '../books/book.context'
import { SearchContext } from '../search/search.context'


export const Authors = () => {
  const authorsArr = [
    'Sarat Chandra Chattopadhyay',
    'Harivansh Rai Bachchan',
    'Premchand',
    'Chetan Bhagat'
    ,'Jhumpa Lahiri',
    'Arundhati Roy',
    'R. K. Narayan',
    'Rabindranath Tagore',
    'Ruskin Bond',
  ]

  const {setBooks} = useContext(BooksContext)
  const {search, setSearch } = useContext(SearchContext) 
  const [author, setAuthor] = useState('') 
 
  useEffect(() => {
    setSearch(author)
    getBooks({q: author}).then((resp) => {
      setBooks(resp.items)
    }).catch((err) => {
      throw err
    })
  }, [author])
  
  return (
    <div className='author'>
      <span>Popular Authors : </span>
      {authorsArr && authorsArr.map((authItem) => (
        <Badge className={(author === authItem) ? 'bg-info' : 'bg-light'}  key={authItem} text="dark" onClick={(e) => {setAuthor(authItem)}}>
          {authItem}
        </Badge>
      ))}
    </div>
  )
}