import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🎮 HS Shop</h3>
            <p>Your destination for the best premium server subscription packages.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/packages">Packages</a></li>
              <li><a href="/checkout">Cart</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#terms">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 HS Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

