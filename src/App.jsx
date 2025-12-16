import { useState } from 'react'
import { Navbar } from './components/navbar/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Catalog } from './catalog-cars/Catalog'
import { RegistrationCard } from './registration/RegistrationCard'

import './App.css'
import { HomePage } from './home_page/HomePage'

import { Favorites } from "../src/data/Favorites"




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <main className='main-container '>
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="/catalogs" element={<Catalog />} />
            <Route path="/registration" element={<RegistrationCard />} />
            <Route path="/favorites" element={<Favorites />} />

          </Routes>




        </main>
      </BrowserRouter>
    </>

  )


}

export default App
