import '../Styles/App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import A_Propos from './A_Propos'
import Home from './Home'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/A_Propos" element={<A_Propos />} />
          </Routes>
          <home />
          <Footer />
    </div>
  )
}

export default App;
