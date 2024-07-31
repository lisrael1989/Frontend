
import './App.css'
import { EatIndex } from './pages/EatIndex'
import { Header } from './cmps/Header'
import { Footer } from './cmps/Footer'
import { Route, Router, Routes } from 'react-router'

export function App() {


  return (
    <div>

      <Header />

      <>

        <Routes>
          <Route path="/" element={<EatIndex />} />
        </Routes>
      </>



      <Footer />

    </div>
  )
}


