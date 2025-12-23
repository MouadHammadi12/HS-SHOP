import { useState } from 'react'
import { durations, calculatePrice } from '../data/packages'
import { servers } from '../data/servers'
import './PackageCard.css'

function PackageCard({ selectedServer: serverId, onAddToCart }) {
  const selectedServer = serverId || servers[0].id
  const [selectedDuration, setSelectedDuration] = useState(durations[0].months)

  const currentPrice = calculatePrice(selectedDuration)
  const currentServer = servers.find(s => s.id === selectedServer) || servers[0]

  const handleAddToCart = () => {
    const item = {
      id: Date.now(),
      server: currentServer.name,
      serverColor: currentServer.color,
      duration: currentPrice.months,
      price: currentPrice.discounted,
      discount: currentPrice.discount
    }
    onAddToCart(item)
  }

  return (
    <section className="section">
      <div className="price-card">
        <div className="price-header">
          <h3>{currentServer.name}</h3>
        </div>
        
        <div className="price-details">
          {/* Duration Selection */}
          <div className="duration-selection">
            <h4 className="duration-title">Choisir la Durée</h4>
            <div className="durations-grid">
              {durations.map(duration => (
                <button
                  key={duration.id}
                  className={`duration-card ${selectedDuration === duration.months ? 'active' : ''} ${duration.popular ? 'popular' : ''}`}
                  onClick={() => setSelectedDuration(duration.months)}
                >
                  {duration.popular && <span className="popular-badge">Populaire</span>}
                  <div className="duration-label">{duration.label}</div>
                  {duration.discount > 0 && (
                    <div className="discount-badge">-{duration.discount}%</div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="duration-display">
            <span className="duration-text">{currentPrice.months} {currentPrice.months === 1 ? 'Mois' : 'Mois'}</span>
            {currentPrice.discount > 0 && (
              <span className="discount-text">Économisez {currentPrice.discount}%</span>
            )}
          </div>
          
          <div className="price-amount">
            {currentPrice.discount > 0 && (
              <span className="original-price">${currentPrice.original.toFixed(2)}</span>
            )}
            <span className="final-price">${currentPrice.discounted.toFixed(2)}</span>
          </div>
          
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Ajouter au Panier
          </button>
        </div>
      </div>
    </section>
  )
}

export default PackageCard

