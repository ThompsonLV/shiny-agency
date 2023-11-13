import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// On importe nos pages
import Home from './pages/Home/'
import Survey from './pages/Survey/'
import Header from './components/Header'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import { createGlobalStyle } from 'styled-components'
// On ajoute nos composants

import Error from './components/Error'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
      margin: 0;
    }
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header /> {/* Layout fait parti du router pour être présent sur toutes les pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
