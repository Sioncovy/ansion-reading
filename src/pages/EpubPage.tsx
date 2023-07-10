import { useEffect, useState } from 'react'
import Epub, { Book } from 'epubjs'
import { Button } from 'antd'

export default function EpubPage() {
  // const [epub, setEpub] = useState<string>('')
  // const [book, setBook] = useState<Book>(new (Epub as any)(filePath))
  // const [book, setBook] = useState(Epub('/test3.epub', { openAs: 'epub' }))

  const [book, setBook] = useState<Book | null>(null)
  const [navigation, setNavigation] = useState<any>(null)

  useEffect(() => {
    const loadBook = async () => {
      const loadedBook = Epub('/test2.epub', {
        openAs: 'epub',
        // @ts-expect-error: epubjs has incorrect types
        requestCredentials: true
      })
      await loadedBook.ready

      setBook(loadedBook)
    }

    loadBook()
  }, [])

  useEffect(() => {
    if (book) {
      const rendition = book.renderTo('viewer', {
        width: '100%',
        height: '90vh'
      })

      book.ready.then(() => {
        rendition.display()
        // @ts-ignore
        const startIndex = book.navigation.tocById.chapter0
        console.log(startIndex)
        setNavigation(book.navigation.toc.slice(startIndex))
        console.log('navigation', navigation)
      })

      return () => {
        rendition.destroy()
      }
    }
  }, [book])

  const clickHandle = async () => {
    // console.log(filePath)
    // await setBook(new (Epub as any)(filePath))
    console.log('book', book)
  }

  const prevHandle = () => {
    book?.rendition.prev()
  }

  const nextHandle = () => {
    book?.rendition.next()
  }

  return (
    <>
      {/*<button onClick={clickHandle}>按钮</button>*/}
      <div id="viewer"></div>
      <div id="toolbar" className="flex justify-center space-x-xl">
        <Button onClick={prevHandle}>上一页</Button>
        <Button onClick={nextHandle}>下一页</Button>
      </div>
    </>
  )
}
