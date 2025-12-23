import { useNavigate } from 'react-router-dom'
import { servers } from '../data/servers'
import { durations, calculatePrice } from '../data/packages'
import { WHATSAPP_NUMBER, getWhatsAppMessage } from '../data/config'
import './Packages.css'

function Packages({ cart, setCart }) {
  const navigate = useNavigate()

  const handleAddToCart = (server, duration, price) => {
    const item = {
      id: Date.now(),
      server: server.name,
      serverColor: server.color,
      duration: duration.months,
      price: price.discounted,
      discount: price.discount
    }
    setCart([...cart, item])
    alert(`Package added to cart: ${server.name} - ${duration.months} ${duration.months === 1 ? 'month' : 'months'}`)
  }

  const handleWhatsAppOrder = (server, duration, price) => {
    const message = getWhatsAppMessage(server, duration, price)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="packages-page">
      <div className="packages-header">
        <h1>📦 Our Packages</h1>
        <p>Choose your favorite package</p>
      </div>

      <div className="packages-container">
        <div className="packages-grid">
          {servers.map(server => 
            durations.map(duration => {
              const price = calculatePrice(duration.months)
              return (
                <div key={`${server.id}-${duration.id}`} className="package-card">
                  {/* Image Section */}
                  <div className="package-card-image" style={{ backgroundColor: server.color + '20' }}>
                    <div className="package-image-placeholder" style={{ backgroundColor: server.color }}>
                      <span className="server-initial">{server.name.charAt(server.name.length - 1)}</span>
                    </div>
                    {duration.popular && (
                      <span className="popular-badge-overlay">Popular</span>
                    )}
                    {price.discount > 0 && (
                      <span className="discount-badge-overlay">-{price.discount}%</span>
                    )}
                  </div>

                  {/* Name and Duration below image */}
                  <div className="package-card-header">
                    <h3 className="package-name">{server.name}</h3>
                    <p className="package-duration-text">{duration.label}</p>
                    <span className="package-region">{server.region}</span>
                  </div>

                  {/* Price and Description */}
                  <div className="package-card-body">
                    {price.discount > 0 && (
                      <div className="package-discount">
                        <span className="original-price">${price.original.toFixed(2)}</span>
                      </div>
                    )}

                    <div className="package-price">
                      <span className="price-currency">$</span>
                      <span className="price-amount">{price.discounted.toFixed(2)}</span>
                    </div>

                    <p className="package-description">{server.description}</p>
                  </div>

                  {/* Buttons */}
                  <div className="package-card-footer">
                    <button 
                      className="btn-add-cart"
                      onClick={() => handleAddToCart(server, duration, price)}
                    >
                      🛒 Add to Cart
                    </button>
                    <button 
                      className="btn-whatsapp"
                      onClick={() => handleWhatsAppOrder(server, duration, price)}
                    >
                      💬 Order via WhatsApp
                    </button>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default Packages

