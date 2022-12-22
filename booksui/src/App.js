/* eslint-disable no-unused-vars */
import './App.css'
import {
  BrowserRouter
} from 'react-router-dom'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import Navigation from './components/routes'
import { useState } from 'react'
import { BooksContext } from './components/books/book.context'
import { SearchContext } from './components/search/search.context'


function App() {
  const [books, setBooks] = useState([])
  const [bookItem, setBookItem] = useState({})
  const [search, setSearch] = useState('')
  const [pageno, setPageno] = useState(1)
  const [totalItems, setTotalItems] = useState(5)

  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <SearchContext.Provider value={{search,setSearch}}>
          <BooksContext.Provider value={{books,setBooks,bookItem,setBookItem,pageno,setPageno, totalItems, setTotalItems}}>
            <section className="app-body"> 
              <Navigation />
            </section>
          </BooksContext.Provider>
        </SearchContext.Provider>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
