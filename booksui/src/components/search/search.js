import { useContext, useEffect, useState } from 'react'
import { getBooks } from '../../service/books.service'
import { BooksContext } from '../books/book.context'
import { SearchContext } from './search.context'

export const Search = () => {

  const {search, setSearch } = useContext(SearchContext) // 
  const {books, setBooks} = useContext(BooksContext) 
    
  const searchBooks = () => {
    getBooks({
      q: search
    }).then((resp) => {
      setBooks(resp.items)
    }).catch((err) => {
      throw err
    })
  }

  return (
    <section className="filter"> 
      <input type="text" value={search} onChange = {(e) => {setSearch(e.target.value)}}></input>
      <button onClick={searchBooks}>Search</button>
    </section>
  )
}