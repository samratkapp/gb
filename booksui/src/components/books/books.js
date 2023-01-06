/* eslint-disable no-unused-vars */
import { useContext, useEffect } from 'react'
import { Badge, Col, Row } from 'react-bootstrap'
import { getBooks } from '../../service/books.service'
import { Search } from '../search/search'
import { BookItem } from './book-item'
import { BooksContext } from './book.context'
import { Paginationui } from '../pagination'
import { Authors } from '../authors/authors'
import { SearchContext } from '../search/search.context'


export const Books = () => {
  const {search} = useContext(SearchContext) // 
  
  const {books, setBooks,pageno,setPageno, totalItems,setTotalItems} = useContext(BooksContext)
  const items = []
    
  useEffect(() => {
    getBooks().then((resp) => {
      setBooks(resp.items)
    })
  }, [])
  useEffect(() => {
    getBooks({
      q:search,
      startIndex:pageno
    }).then((resp) => {
      setTotalItems(resp.totalItems)
      setBooks(resp.items)
    })
  }, [pageno])
  
 
  return (
    <>
      
      <Row >
        <Row > 
          <Col  md={4}>   <Search /></Col>
          <Col md={8}>   <Authors /></Col>
        </Row >
        <Col  md={12}> 
          <Row xs={1} md={4} className="g-4">
            {books && books.map((item, idx) => (
              <Col> 
                <BookItem item={item} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <Row>
        <Paginationui setPageno={setPageno} totalItems={totalItems} />
      </Row>
    </>
  )
}
   