import { useContext,  } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BooksContext } from './book.context'

export const BookDetail = () => {
  
  const {bookItem,setItem} = useContext(BooksContext)
 
  return (bookItem &&
    <Row xs={1} md={1} className="g-4">
      <Col xs={2} md={2} >
        <Link to={'/'}>{'<< Back'}</Link>
      </Col>
      <Col xs={8} md={8} > 
        <Card className="book-detail"  key={bookItem.id}>
          <Card.Img key={`img${bookItem.id}`} src={bookItem?.volumeInfo?.imageLinks?.thumbnail} />
          <Card.Body>
            <Card.Title > {(bookItem?.volumeInfo.title || '').substring(0, 35)}</Card.Title>
            <Card.Title > {(bookItem?.volumeInfo.subtitle || '').substring(0, 35)}</Card.Title>
            <Card.Text>
              <p>
              Publisher : {bookItem?.volumeInfo?.publisher} <br />
              Published Date : {bookItem?.volumeInfo?.publishedDate} <br />
              Page Count : {bookItem?.volumeInfo?.pageCount || ''} <br />
              Authors : {(bookItem?.volumeInfo?.authors)}<br /> 
              </p>
              <p> <section
                dangerouslySetInnerHTML={{ __html: bookItem?.volumeInfo?.description }}
              />
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}
   