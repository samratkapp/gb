/* eslint-disable no-unused-vars */
import Pagination from 'react-bootstrap/Pagination'

export const Paginationui = ({ setPageno, totalItems }) => {

  const items = []
  const maxpagvalue = (totalItems > 2000) ? (totalItems / 250) : (totalItems / 100)

  for (let number = 1; number <= Math.ceil(maxpagvalue); number++) {
    items.push(
      <Pagination.Item key={number} onClick={() => {setPageno(number)}}>
        {number}
      </Pagination.Item>,
    )
  }

  const incrementCount = () => {
    setPageno(prevPage => prevPage + 1)
  }

  const decrementCount = () => {
    setPageno(prevPage => prevPage - 1)
  }
  
  return (
    <div className='pagination'> 
      <Pagination>
        <Pagination.Prev  onClick={decrementCount} />
        {items}
        <Pagination.Next onClick={incrementCount} />
      </Pagination>
    </div>
  )
}
   