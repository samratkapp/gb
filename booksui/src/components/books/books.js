/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { getBooks } from '../../service/books.service'
import { Search } from '../search/search'
import { BookItem } from './book-item'
import { BooksContext } from './book.context'
import Pagination from 'react-bootstrap/Pagination'
import { Paginationui } from '../pagination'


export const Books = () => {
  const {books, setBooks,pageno,setPageno, totalItems,setTotalItems} = useContext(BooksContext)
  const items = []
    
  useEffect(() => {
    getBooks().then((resp) => {
      setBooks(resp.items)
    })
  }, [])
  useEffect(() => {
    getBooks({startIndex:pageno}).then((resp) => {
      setTotalItems(resp.totalItems)
      setBooks(resp.items)
    })
  }, [pageno])
  
 
  return (
    <>
      <Row xs={1} md={3} className="g-4">
        <Search /> 
      </Row>
      <Row xs={1} md={3} className="g-4">
        {books && books.map((item, idx) => (
          <Col> 
            <BookItem item={item} />
          </Col>
        ))}
      </Row>
      <Row>
        <Paginationui setPageno={setPageno} totalItems={totalItems} />
      </Row>
    </>
  )
}
   