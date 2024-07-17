import React from 'react'
import './Styles/index.css'
import { Routes, Route } from 'react-router-dom' 
import Header from './Components/Header'
import APropos from './Pages/APropos'
import Accueil from './Pages/Accueil'
import Footer from './Components/Footer'
import Logement from './Pages/Logement'
import ErrorPage from './Pages/ErrorPage'
import ErrorAll from './Components/ErrorAll'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/A_Propos" element={<APropos />}/>
        <Route path="/Logement/:galleryId" element={<Logement />}/>            
        <Route path="/404" element={<ErrorPage />} /> 
        <Route path="*" element={<ErrorAll />} /> 
      </Routes>
      <Footer />
    </div>
  )
}
export default App;
