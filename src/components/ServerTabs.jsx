import { useState } from 'react'
import { servers } from '../data/servers'
import './ServerTabs.css'

function ServerTabs({ selectedServer, onSelectServer }) {
  const [isOpen, setIsOpen] = useState(false)

  const selectedServerData = servers.find(s => s.id === selectedServer)

  return (
    <section className="section">
      <h2 className="section-title">Choisir le Serveur</h2>
      <div className="dropdown-container">
        <button
          className="dropdown-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="dropdown-selected">
            {selectedServerData ? (
              <>
                <div className="server-color" style={{ backgroundColor: selectedServerData.color }}></div>
                <span>{selectedServerData.name}</span>
              </>
            ) : (
              <span>Select a server</span>
            )}
          </div>
          <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
        </button>

        {isOpen && (
          <div className="dropdown-menu">
            {servers.map(server => (
              <button
                key={server.id}
                className={`dropdown-item ${selectedServer === server.id ? 'active' : ''}`}
                onClick={() => {
                  onSelectServer(server.id)
                  setIsOpen(false)
                }}
              >
                <div className="server-color" style={{ backgroundColor: server.color }}></div>
                <div className="server-info">
                  <h3>{server.name}</h3>
                  <span className="server-description">{server.description}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ServerTabs

