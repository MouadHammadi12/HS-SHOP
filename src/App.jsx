import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Packages from './pages/Packages'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {
  const [cart, setCart] = useState([])

  return (
    <Router>
      <div className="app">
        <Navbar cart={cart} setCart={setCart} cartCount={cart.length} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/packages" 
              element={<Packages cart={cart} setCart={setCart} />} 
            />
            <Route 
              path="/cart" 
              element={<Cart cart={cart} setCart={setCart} />} 
            />
            <Route 
              path="/checkout" 
              element={<Checkout cart={cart} setCart={setCart} />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

