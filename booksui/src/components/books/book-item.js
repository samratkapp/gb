
import { useContext } from 'react'
import Card from 'react-bootstrap/Card'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BooksContext } from './book.context'

export const BookItem = ({item}) => {
    
  const {bookItem, setBookItem} = useContext(BooksContext)
  const location = useLocation()
  const navigate = useNavigate() 
  const setItem = (value) => {
    setBookItem(value)
  }

  return ( 
    <Card className="book-item"  key={item.id}>
      <Link onClick={() => {setItem(item)}} key={`key${item.id}`}  to={`book-detail/${item.id}`} >
        <Card.Img    key={`img${item.id}`} src={item?.volumeInfo?.imageLinks?.smallThumbnail} />
      </Link>
      <Card.Body>
        <Card.Title > {(item?.volumeInfo.title).substring(0, 35)}</Card.Title>
        <Card.Text>
          <div className='item-text'
            dangerouslySetInnerHTML={{ __html: (item?.volumeInfo.description || '').substring(0, 200) }}
          />
        </Card.Text>
      </Card.Body>
             
    </Card>
  )
}
   