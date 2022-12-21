import { useContext, useEffect, useState } from 'react'
import { getBooks } from '../../service.js/books.service'
import { BooksContext } from '../books/book.context'
import { SearchContext } from './search.context'

export const Search = () => {

  const {search, setSearch } = useContext(SearchContext) // 
  const {books, setBooks} = useContext(BooksContext) 
    
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const searchBooks = () => {
    getBooks({
      q: search,
      // filter: 'full',
    }).then((resp) => {
      setBooks(resp.items)
    }).catch((err) => {
      throw err
    })
  }

  return (
    <section className="filter"> 
      <label> Search : </label> 
      <input type="text" onChange = {handleChange}></input>
      <button onClick={searchBooks}>Search</button>
    </section>
  )
}