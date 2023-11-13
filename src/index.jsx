import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// On importe nos pages
import Home from './pages/Home/'
import Survey from './pages/Survey/'
import Header from './components/Header'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
// On ajoute nos composants

import Error from './components/Error'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header /> {/* Layout fait parti du router pour être présent sur toutes les pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/result" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
