// import { useState } from 'react'
import './App.css'
import EpubPage from './pages/EpubPage.tsx'
import Home from './pages/Home.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'

function App() {
  return (
    <>
      {/*<div id={'root'}>*/}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#08979c',
            fontFamily: 'app-font'
          }
        }}
      >
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ConfigProvider>

      {/*</div>*/}
    </>
  )
}

export default App
