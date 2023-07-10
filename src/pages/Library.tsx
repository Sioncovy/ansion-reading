import { useState } from 'react'
import Book from '../components/Book'

export default function Library() {
  const [bookList, setBookList] = useState<Array<any>>([1, 1, 1])
  return (
    <div className="flex space-x-xl">
      {bookList.map((item) => {
        return <Book />
      })}
    </div>
  )
}
