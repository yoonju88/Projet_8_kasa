import React from 'react'
import '../Styles/index.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import A_Propos from './A_Propos'
import Accueil from './Accueil'
import Footer from './Footer'
import Logement from './Logement'

function App() {
  return (
    <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/A_Propos" element={<A_Propos />}/>
            <Route path="/Logement" element={<Logement />}/>
          </Routes>
          <Footer />
    </div>
  )
}

export default App;
