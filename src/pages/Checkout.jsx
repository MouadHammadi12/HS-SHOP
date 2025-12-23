import { useNavigate } from 'react-router-dom'
import { WHATSAPP_NUMBER } from '../data/config'
import './Checkout.css'

function Checkout({ cart, setCart }) {
  const navigate = useNavigate()
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const handleWhatsAppOrder = () => {
    let message = `Hello! I want to complete my order:\n\n`
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.server}\n`
      message += `   Duration: ${item.duration} ${item.duration === 1 ? 'month' : 'months'}\n`
      message += `   Price: $${item.price.toFixed(2)}\n`
      if (item.discount > 0) {
        message += `   Discount: ${item.discount}%\n`
      }
      message += `\n`
    })
    
    message += `💰 Total: $${total.toFixed(2)}\n\n`
    message += `Please confirm my order. Thank you! 🙏`
    
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <div className="empty-checkout">
          <h1>Your cart is empty</h1>
          <p>Add packages before checkout</p>
          <button className="back-btn" onClick={() => navigate('/packages')}>
            View Packages
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h1 className="checkout-title">✅ Complete Your Order</h1>

        <div className="checkout-content">
          <div className="checkout-items">
            <h2>Order Summary</h2>
            
            <div className="items-list">
              {cart.map(item => (
                <div key={item.id} className="checkout-item">
                  <div className="checkout-item-info">
                    <div className="checkout-item-color" style={{ backgroundColor: item.serverColor }}></div>
                    <div>
                      <h3>{item.server}</h3>
                      <p>Subscription: {item.duration} {item.duration === 1 ? 'month' : 'months'}</p>
                      {item.discount > 0 && (
                        <span className="item-discount">Savings: {item.discount}%</span>
                      )}
                    </div>
                  </div>
                  <div className="checkout-item-price">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="order-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summary-row total-row">
                <span>Total:</span>
                <span className="final-total">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="checkout-whatsapp">
            <div className="whatsapp-icon">💬</div>
            <h2>Order via WhatsApp</h2>
            <p>Click the button below to complete your order through WhatsApp</p>
            
            <button 
              className="whatsapp-btn"
              onClick={handleWhatsAppOrder}
            >
              📱 Order Now via WhatsApp
            </button>
            
            <p className="whatsapp-note">
              We'll contact you shortly to confirm your order
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout

