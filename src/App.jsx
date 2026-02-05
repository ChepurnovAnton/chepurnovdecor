import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Catalog from './Pages/Catalog/Catalog'
import Portfolio from './Pages/Portfolio/Portfolio'
import PortfolioGallery from './Pages/Portfolio/PortfolioGallery'
import CommercialPage from './Pages/CommercialPage/CommercialPage'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home/Home'
import { useEffect } from 'react'


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const saved = sessionStorage.getItem('catalogScrollPosition');
    if (pathname === '/catalog' && saved) {
      // Restore saved scroll position when explicitly returning to catalog
      window.scrollTo(0, parseInt(saved, 10));
      sessionStorage.removeItem('catalogScrollPosition');
    } else {
      // Default behaviour: scroll to top on route change
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
      <Router>
        <ScrollToTop />
        <div className='conteiner'>
          <Header />
          <div className='main'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:id" element={<PortfolioGallery />} />
              <Route path="/commercial" element={<CommercialPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  )
}

export default App
