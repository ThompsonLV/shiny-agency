import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// On importe nos pages
import Home from './pages/Home/'
import Survey from './pages/Survey/'
import Results from './pages/Results'
import Freelances from './pages/Freelances'

// On ajoute nos composants et leur style
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import { ThemeProvider } from './utils/context'
import { SurveyProvider } from './utils/context'

// On ajoute nos fichiers de variables
import GlobalStyle from './utils/style/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />{' '}
          {/* Layout fait parti du router pour être présent sur toutes les pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)
