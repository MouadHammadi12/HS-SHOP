import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar({ cart = [], setCart, cartCount = 0 }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const cartRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside cart dropdown
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false)
      }
      // Check if click is outside mobile menu (but not on the hamburger button)
      if (mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) &&
          !event.target.closest('.mobile-menu-btn')) {
        setIsMobileMenuOpen(false)
      }
    }

    // Also handle touch events for mobile
    const handleTouchOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false)
      }
      if (mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) &&
          !event.target.closest('.mobile-menu-btn')) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isCartOpen || isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleTouchOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleTouchOutside)
    }
  }, [isCartOpen, isMobileMenuOpen])

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const totalCart = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="logo-text">HS Shop</span>
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation()
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li>
            <Link to="/packages" className="navbar-link">Packages</Link>
          </li>
          <li className="cart-wrapper" ref={cartRef}>
            <button 
              className="cart-icon-btn"
              onClick={() => {
                if (cart.length === 0) {
                  navigate('/cart')
                } else {
                  setIsCartOpen(!isCartOpen)
                }
              }}
            >
              🛒
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            
            {isCartOpen && cart.length > 0 && (
              <div className="cart-dropdown">
                <div className="cart-dropdown-header">
                  <h3>Cart ({cart.length})</h3>
                  <button className="close-cart" onClick={() => setIsCartOpen(false)}><span className="close-icon">×</span></button>
                </div>
                
                <div className="cart-dropdown-items">
                  {cart.map(item => (
                    <div key={item.id} className="cart-dropdown-item">
                      <div className="cart-dropdown-item-info">
                        <div className="cart-dropdown-color" style={{ backgroundColor: item.serverColor }}></div>
                        <div>
                          <p className="cart-dropdown-server">{item.server}</p>
                          <p className="cart-dropdown-duration">{item.duration} {item.duration === 1 ? 'month' : 'months'}</p>
                        </div>
                      </div>
                      <div className="cart-dropdown-item-actions">
                        <span className="cart-dropdown-price">${item.price.toFixed(2)}</span>
                        <button 
                          className="cart-dropdown-remove"
                          onClick={() => removeFromCart(item.id)}
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="cart-dropdown-footer">
                  <div className="cart-dropdown-total">
                    <span>Total:</span>
                    <span className="cart-dropdown-total-amount">${totalCart.toFixed(2)}</span>
                  </div>
                  <button 
                    className="cart-dropdown-checkout"
                    onClick={() => {
                      navigate('/checkout')
                      setIsCartOpen(false)
                    }}
                  >
                    Proceed to Checkout
                  </button>
                  <button 
                    className="cart-dropdown-view-cart"
                    onClick={() => {
                      navigate('/cart')
                      setIsCartOpen(false)
                    }}
                  >
                    View Full Cart
                  </button>
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-menu-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}

        {/* Mobile Dropdown Menu */}
        <div 
          ref={mobileMenuRef}
          className={`mobile-menu-dropdown ${isMobileMenuOpen ? 'open' : ''}`}
        >
          <div className="mobile-menu-header">
            <h3>Menu</h3>
            <button 
              className="mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
            </button>
          </div>
          <div className="mobile-menu-content">
            <Link 
              to="/" 
              className="mobile-menu-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              
              <span>Home</span>
            </Link>
            <Link 
              to="/packages" 
              className="mobile-menu-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              
              <span>Packages</span>
            </Link>
            <Link 
              to="/cart"
              className="mobile-menu-link mobile-cart-btn"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="mobile-link-icon">🛒</span>
              <span>Cart</span>
              {cartCount > 0 && <span className="mobile-cart-badge">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

