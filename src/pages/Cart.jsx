import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Cart.css'

function Cart({ cart, setCart }) {
  const navigate = useNavigate()
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart-container">
          <div className="empty-cart-icon">🛒</div>
          <h1 className="empty-cart-title">Your Cart is Empty</h1>
          <p className="empty-cart-message">
            Looks like you haven't added any packages to your cart yet.
            <br />
            Start shopping to find amazing IPTV packages!
          </p>
          <Link to="/packages" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-page-title">Shopping Cart</h1>
        
        <div className="cart-content">
          <div className="cart-items-section">
            <h2>Your Items ({cart.length})</h2>
            
            <div className="cart-items-list">
              {cart.map(item => (
                <div key={item.id} className="cart-page-item">
                  <div className="cart-page-item-info">
                    <div 
                      className="cart-page-item-color" 
                      style={{ backgroundColor: item.serverColor }}
                    ></div>
                    <div className="cart-page-item-details">
                      <h3>{item.server}</h3>
                      <p>Duration: {item.duration} {item.duration === 1 ? 'month' : 'months'}</p>
                      {item.discount > 0 && (
                        <span className="cart-item-discount">Savings: {item.discount}%</span>
                      )}
                    </div>
                  </div>
                  <div className="cart-page-item-actions">
                    <span className="cart-page-item-price">${item.price.toFixed(2)}</span>
                    <button 
                      className="cart-page-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summary-row total-row">
                <span>Total:</span>
                <span className="summary-total">${total.toFixed(2)}</span>
              </div>
            </div>

            <button 
              className="proceed-checkout-btn"
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
            </button>

            <Link to="/packages" className="continue-shopping-link">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

