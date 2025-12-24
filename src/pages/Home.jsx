import { Link } from 'react-router-dom'
import { servers } from '../data/servers'
import { durations } from '../data/packages'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-image-section">
            <div className="iptv-illustration">
              <img src="/logo1.jpg" alt="IPTV Service" className="hero-custom-image" />
            </div>
          </div>
          <div className="hero-text-section">
            <h1 className="hero-title">
              📺 Premium <span className="highlight">IPTV</span> Service
            </h1>
            <p className="hero-subtitle">
              Watch thousands of channels in HD/4K quality. Sports, Movies, Series, and more with the best IPTV subscription packages
            </p>
            <Link to="/packages" className="cta-button">
              View Packages
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <h2 className="section-heading">Why Choose HS Shop?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>High Performance</h3>
              <p>Optimized servers for maximum performance</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Global Coverage</h3>
              <p>Servers in multiple regions for minimal latency</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Save up to 30% with our subscription packages</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure</h3>
              <p>Secure payments and 24/7 support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="servers-preview">
        <div className="servers-container">
          <h2 className="section-heading">Our Servers</h2>
          <div className="servers-preview-grid">
            {servers.map(server => (
              <div key={server.id} className="server-preview-card">
                <div className="server-preview-color" style={{ backgroundColor: server.color }}></div>
                <h3>{server.name}</h3>
                <p className="server-price">${server.price}/month</p>
                <p className="server-desc">{server.description}</p>
              </div>
            ))}
          </div>
          <Link to="/packages" className="view-all-btn">
            View All Packages
          </Link>
        </div>
      </section>

      <section className="pricing-preview">
        <div className="pricing-container">
          <h2 className="section-heading">Available Packages</h2>
          <div className="pricing-grid">
            {durations.map(duration => (
              <div key={duration.id} className={`pricing-card ${duration.popular ? 'popular' : ''}`}>
                {duration.popular && <div className="popular-label">Popular</div>}
                <h3>{duration.label}</h3>
                {duration.discount > 0 && (
                  <div className="discount-label">-{duration.discount}%</div>
                )}
                <p className="pricing-description">
                  {duration.discount > 0 
                    ? `Save ${duration.discount}% with this subscription`
                    : 'Standard monthly subscription'
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

