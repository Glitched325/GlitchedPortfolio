import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import FloatingMenu from './components/FloatingMenu'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import TestPage from './pages/TestPage'
import NotFound from './pages/NotFound'
import './styles/base.css'

function App() {
  return (
    <HashRouter>
      <div className="shell">
        <Navbar />
        <FloatingMenu />
        <main className="main">
          <Routes>
            <Route path="/"      element={<Home />}     />
            <Route path="/about" element={<About />}    />
            <Route path="/test"  element={<TestPage />} />
            <Route path="*"      element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App