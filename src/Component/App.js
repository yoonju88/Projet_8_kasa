import React from 'react'
import '../Styles/index.css'
import { Routes, Route } from 'react-router-dom' 
import Header from './Header'
import APropos from './APropos'
import Accueil from './Accueil'
import Footer from './Footer'
import Logement from './Logement'
import ErrorPage from './ErrorPage'

function App() {

  return (
    <div className='App' >
        <Header />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/A_Propos" element={<APropos />}/>
            <Route path="/Logement/:galleryId" element={<Logement />}/>
            <Route path="*" element={<ErrorPage />} /> 
          </Routes>
          <Footer />
    </div>
  )
}
export default App;
